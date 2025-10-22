import { router } from "../router";
import { state, Choice } from "../state";

// Importar imágenes
const tituloImg = new URL(
  "../images/Piedra Papel Tijera titulo.png",
  import.meta.url
).href;
const piedraImg = new URL("../images/piedra.png", import.meta.url).href;
const papelImg = new URL("../images/papel.png", import.meta.url).href;
const tijeraImg = new URL("../images/tijera.png", import.meta.url).href;
const robotImg = new URL("../images/robot-amigable.jpg", import.meta.url).href;

export function GamePage(): HTMLElement {
  const container = document.createElement("div");
  container.className = "page game-page";

  container.innerHTML = `
    <div class="game-header">
      <img
        src="${tituloImg}"
        alt="Título"
        class="title-small"
      />
    </div>

    <div class="game-content">
      <div class="player-section">
        <h2 class="player-label">Tú</h2>
        <div class="choice-buttons">
          <button class="choice-btn" data-choice="piedra">
            <img src="${piedraImg}" alt="Piedra" />
          </button>
          <button class="choice-btn" data-choice="papel">
            <img src="${papelImg}" alt="Papel" />
          </button>
          <button class="choice-btn" data-choice="tijera">
            <img src="${tijeraImg}" alt="Tijera" />
          </button>
        </div>
      </div>

      <div class="vs-divider">
        <h2>VS</h2>
      </div>

      <div class="computer-section">
        <h2 class="player-label">Computadora</h2>
        <div class="computer-choice">
          <img src="${robotImg}" alt="Robot" class="robot-img" />
        </div>
      </div>
    </div>
  `;

  const choiceButtons = container.querySelectorAll(
    ".choice-btn"
  ) as NodeListOf<HTMLButtonElement>;

  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.getAttribute("data-choice") as Choice;

      // Deshabilitar todos los botones
      choiceButtons.forEach((btn) => (btn.disabled = true));

      // Resaltar el botón seleccionado
      button.classList.add("selected");

      // Jugar el juego
      state.playGame(choice);

      // Crear overlay de conteo regresivo
      const countdownOverlay = document.createElement("div");
      countdownOverlay.className = "countdown-overlay";

      const countdownNumber = document.createElement("div");
      countdownNumber.className = "countdown-number countdown-animate";
      countdownNumber.textContent = "3";

      countdownOverlay.appendChild(countdownNumber);
      container.appendChild(countdownOverlay);

      // Animar el conteo regresivo
      let count = 3;
      const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
          countdownNumber.textContent = count.toString();
          countdownNumber.style.animation = "none";
          // Forzar reflow para reiniciar la animación
          void countdownNumber.offsetWidth;
          countdownNumber.style.animation = "";
        } else {
          clearInterval(countdownInterval);
          router.navigate("/result");
        }
      }, 1000);
    });
  });

  return container;
}
