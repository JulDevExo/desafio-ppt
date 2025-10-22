import { router } from "../router";
import { state } from "../state";

// Importar imágenes
const ganasteImg = new URL("../images/resultado ganaste.png", import.meta.url)
  .href;
const perdisteImg = new URL("../images/resultado perdiste.png", import.meta.url)
  .href;
const piedraImg = new URL("../images/piedra.png", import.meta.url).href;
const papelImg = new URL("../images/papel.png", import.meta.url).href;
const tijeraImg = new URL("../images/tijera.png", import.meta.url).href;
const volverBtn = new URL("../images/botón volver a jugar.png", import.meta.url)
  .href;

export function ResultPage(): HTMLElement {
  const container = document.createElement("div");
  container.className = "page result-page";

  const gameState = state.getState();
  const { playerChoice, computerChoice, result } = gameState;

  const resultImage =
    result === "win" ? ganasteImg : result === "lose" ? perdisteImg : "";

  const resultText = result === "tie" ? "¡Empate!" : "";

  // Mapeo de las elecciones a las imágenes
  const choiceImages: { [key: string]: string } = {
    piedra: piedraImg,
    papel: papelImg,
    tijera: tijeraImg,
  };

  container.innerHTML = `
    <div class="result-content">
      ${
        resultImage
          ? `<img src="${resultImage}" alt="Resultado" class="result-image" />`
          : `<h1 class="tie-text">${resultText}</h1>`
      }
      
      <div class="choices-display">
        <div class="choice-item">
          <h3>Tú</h3>
          <img src="${
            choiceImages[playerChoice || "piedra"]
          }" alt="${playerChoice}" class="choice-img" />
        </div>
        
        <div class="choice-item">
          <h3>Computadora</h3>
          <img src="${
            choiceImages[computerChoice || "piedra"]
          }" alt="${computerChoice}" class="choice-img" />
        </div>
      </div>

      <div class="result-buttons">
        <button class="play-again-btn">
          <img src="${volverBtn}" alt="Volver a jugar" />
        </button>
        <button class="score-btn">Ver puntuación</button>
      </div>
    </div>
  `;

  const playAgainBtn = container.querySelector(
    ".play-again-btn"
  ) as HTMLButtonElement;
  const scoreBtn = container.querySelector(".score-btn") as HTMLButtonElement;

  playAgainBtn.addEventListener("click", () => {
    state.resetGame();
    router.navigate("/game");
  });

  scoreBtn.addEventListener("click", () => {
    router.navigate("/score");
  });

  return container;
}
