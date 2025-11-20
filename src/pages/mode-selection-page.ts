import { router } from "../router";

export function ModeSelectionPage(): HTMLElement {
  const container = document.createElement("div");
  container.className = "page mode-selection-page";

  const tituloImg = new URL(
    "../images/Piedra Papel Tijera titulo.png",
    import.meta.url
  ).href;

  container.innerHTML = `
    <img
      src="${tituloImg}"
      alt="Piedra Papel Tijera"
      class="title-image"
    />

    <h2 class="mode-title">Selecciona el modo de juego</h2>

    <div class="mode-buttons">
      <button class="mode-btn local-btn">
        <span class="mode-icon">🤖</span>
        <span class="mode-label">Vs Computadora</span>
        <span class="mode-description">Juega contra la IA</span>
      </button>

      <button class="mode-btn online-btn">
        <span class="mode-icon">👥</span>
        <span class="mode-label">Multijugador</span>
        <span class="mode-description">Juega con otra persona</span>
      </button>
    </div>
  `;

  const localBtn = container.querySelector(".local-btn") as HTMLButtonElement;
  const onlineBtn = container.querySelector(".online-btn") as HTMLButtonElement;

  localBtn.addEventListener("click", () => {
    router.navigate("/game");
  });

  onlineBtn.addEventListener("click", () => {
    router.navigate("/online-setup");
  });

  return container;
}
