import { router } from "../router";
import { state } from "../state";

// Importar imágenes
const scoreImg = new URL("../images/ppt.jpg", import.meta.url).href;

export function ScorePage(): HTMLElement {
  const container = document.createElement("div");
  container.className = "page score-page";

  const gameState = state.getState();

  container.innerHTML = `
    <div class="score-content">
      
      <div class="score-display">
        <div class="score-item">
          <h2>Ganadas</h2>
          <div class="score-number">${gameState.wins}</div>
        </div>
        
        <div class="score-divider"></div>
        
        <div class="score-item">
          <h2>Perdidas</h2>
          <div class="score-number">${gameState.losses}</div>
        </div>
      </div>

      <div class="score-buttons">
        <button class="back-btn">Volver al juego</button>
        <button class="reset-btn">Reiniciar puntuación</button>
      </div>
    </div>
  `;

  const backBtn = container.querySelector(".back-btn") as HTMLButtonElement;
  const resetBtn = container.querySelector(".reset-btn") as HTMLButtonElement;

  backBtn.addEventListener("click", () => {
    router.navigate("/game");
  });

  resetBtn.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres reiniciar la puntuación?")) {
      state.resetScore();
      router.navigate("/score");
    }
  });

  return container;
}
