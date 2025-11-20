import { router } from "../router";

// Importar imágenes usando new URL para que Parcel las procese
const tituloImg = new URL(
  "../images/Piedra Papel Tijera titulo.png",
  import.meta.url
).href;
const empezarBtn = new URL("../images/botón empezar.png", import.meta.url).href;
const tijeraImg = new URL("../images/tijera.png", import.meta.url).href;
const piedraImg = new URL("../images/piedra.png", import.meta.url).href;
const papelImg = new URL("../images/papel.png", import.meta.url).href;

export function WelcomePage(): HTMLElement {
  const container = document.createElement("div");
  container.className = "page welcome-page";

  container.innerHTML = `
    <img
      src="${tituloImg}"
      alt="Piedra Papel Tijera"
      class="title-image"
    />

    <button class="start-button">
      <img src="${empezarBtn}" alt="Empezar" />
    </button>

    <div class="hands-container">
      <img src="${tijeraImg}" alt="Tijera" class="hand-icon" />
      <img src="${piedraImg}" alt="Piedra" class="hand-icon" />
      <img src="${papelImg}" alt="Papel" class="hand-icon" />
    </div>
  `;

  const startButton = container.querySelector(
    ".start-button"
  ) as HTMLButtonElement;
  startButton.addEventListener("click", () => {
    router.navigate("/mode-selection");
  });

  return container;
}
