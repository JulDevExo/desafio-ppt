import { router } from "../router";
import { state } from "../state";
import { apiService } from "../api-service";

export function OnlineResultPage(): HTMLElement {
  const container = document.createElement("div");
  container.className = "page result-page";

  const gameState = state.getState();
  const { playerChoice, opponentChoice, result, playerName, opponentName } =
    gameState;

  const ganasteImg = new URL("../images/resultado ganaste.png", import.meta.url)
    .href;
  const perdisteImg = new URL(
    "../images/resultado perdiste.png",
    import.meta.url
  ).href;
  const piedraImg = new URL("../images/piedra.png", import.meta.url).href;
  const papelImg = new URL("../images/papel.png", import.meta.url).href;
  const tijeraImg = new URL("../images/tijera.png", import.meta.url).href;
  const volverBtn = new URL(
    "../images/botón volver a jugar.png",
    import.meta.url
  ).href;

  const choiceImages: { [key: string]: string } = {
    piedra: piedraImg,
    papel: papelImg,
    tijera: tijeraImg,
  };

  const resultImage =
    result === "win" ? ganasteImg : result === "lose" ? perdisteImg : "";

  const resultText = result === "tie" ? "¡Empate!" : "";

  container.innerHTML = `
    <div class="result-content">
      ${
        resultImage
          ? `<img src="${resultImage}" alt="Resultado" class="result-image" />`
          : `<h1 class="tie-text">${resultText}</h1>`
      }
      
      <div class="choices-display">
        <div class="choice-item">
          <h3>${playerName || "Tú"}</h3>
          <img src="${
            choiceImages[playerChoice || "piedra"]
          }" alt="${playerChoice}" class="choice-img" />
        </div>
        
        <div class="choice-item">
          <h3>${opponentName || "Oponente"}</h3>
          <img src="${
            choiceImages[opponentChoice || "piedra"]
          }" alt="${opponentChoice}" class="choice-img" />
        </div>
      </div>

      <div class="result-buttons">
        <button class="play-again-btn">
          <img src="${volverBtn}" alt="Volver a jugar" />
        </button>
        <button class="score-btn">Ver puntuación</button>
        <button class="leave-btn">Salir de la sala</button>
      </div>
    </div>
  `;

  const playAgainBtn = container.querySelector(
    ".play-again-btn"
  ) as HTMLButtonElement;
  const scoreBtn = container.querySelector(".score-btn") as HTMLButtonElement;
  const leaveBtn = container.querySelector(".leave-btn") as HTMLButtonElement;

  // Finalizar partida y actualizar score en el backend
  if (gameState.roomId && result === "win" && gameState.playerId) {
    apiService
      .finishGame(gameState.roomId, gameState.playerId)
      .catch(console.error);
  } else if (gameState.roomId && result === "lose") {
    apiService.finishGame(gameState.roomId, null).catch(console.error);
  } else if (gameState.roomId && result === "tie") {
    apiService.finishGame(gameState.roomId, null).catch(console.error);
  }

  playAgainBtn.addEventListener("click", async () => {
    // Resetear en el backend primero
    if (gameState.roomId) {
      try {
        await apiService.finishGame(gameState.roomId, null);
      } catch (error) {
        console.error("Error al resetear juego:", error);
      }
    }

    // Resetear estado local
    state.resetGame();

    // Pequeño delay para asegurar que Firebase se actualice
    setTimeout(() => {
      router.navigate("/online-game");
    }, 300);
  });

  scoreBtn.addEventListener("click", () => {
    router.navigate("/online-score");
  });

  leaveBtn.addEventListener("click", () => {
    state.setLocalMode();
    router.navigate("/welcome");
  });

  return container;
}
