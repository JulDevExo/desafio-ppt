import { router } from "../router";
import { state } from "../state";
import { apiService } from "../api-service";

export function OnlineScorePage(): HTMLElement {
  const container = document.createElement("div");
  container.className = "page score-page";

  const gameState = state.getState();
  const scoreImg = new URL("../images/score.png", import.meta.url).href;

  container.innerHTML = `
    <div class="score-content">
      <img src="${scoreImg}" alt="Score" class="score-title" />
      
      <div class="loading-score">Cargando puntuación...</div>
      
      <div class="score-display" style="display: none;">
        <div class="score-item">
          <h2 class="player-score-name">Jugador 1</h2>
          <div class="score-number">0</div>
        </div>
        
        <div class="score-divider"></div>
        
        <div class="score-item">
          <h2 class="player-score-name2">Jugador 2</h2>
          <div class="score-number2">0</div>
        </div>
      </div>

      <div class="score-buttons">
        <button class="back-btn">Volver al juego</button>
        <button class="leave-room-btn">Salir de la sala</button>
      </div>
    </div>
  `;

  const loadingDiv = container.querySelector(".loading-score") as HTMLElement;
  const scoreDisplay = container.querySelector(".score-display") as HTMLElement;
  const backBtn = container.querySelector(".back-btn") as HTMLButtonElement;
  const leaveBtn = container.querySelector(
    ".leave-room-btn"
  ) as HTMLButtonElement;

  // Cargar score del servidor
  if (gameState.roomId) {
    apiService
      .getScore(gameState.roomId)
      .then((response) => {
        const { score } = response;

        // Actualizar UI
        const player1Name = container.querySelector(
          ".player-score-name"
        ) as HTMLElement;
        const player1Score = container.querySelector(
          ".score-number"
        ) as HTMLElement;
        const player2Name = container.querySelector(
          ".player-score-name2"
        ) as HTMLElement;
        const player2Score = container.querySelector(
          ".score-number2"
        ) as HTMLElement;

        player1Name.textContent = score.player1.name;
        player1Score.textContent = score.player1.wins.toString();
        player2Name.textContent = score.player2.name || "Esperando...";
        player2Score.textContent = score.player2.wins.toString();

        loadingDiv.style.display = "none";
        scoreDisplay.style.display = "flex";
      })
      .catch((error) => {
        console.error(error);
        loadingDiv.textContent = "Error al cargar puntuación";
      });
  }

  backBtn.addEventListener("click", () => {
    router.navigate("/online-game");
  });

  leaveBtn.addEventListener("click", () => {
    state.setLocalMode();
    router.navigate("/welcome");
  });

  return container;
}
