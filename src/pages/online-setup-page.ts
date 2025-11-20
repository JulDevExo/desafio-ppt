import { router } from "../router";
import { state } from "../state";
import { apiService } from "../api-service";

export function OnlineSetupPage(): HTMLElement {
  const container = document.createElement("div");
  container.className = "page online-setup-page";

  container.innerHTML = `
    <h2 class="setup-title">Juego Multijugador</h2>

    <div class="setup-options">
      <div class="setup-option">
        <h3>Crear Nueva Sala</h3>
        <input 
          type="text" 
          class="player-name-input" 
          placeholder="Tu nombre"
          maxlength="20"
        />
        <button class="create-room-btn">Crear Sala</button>
      </div>

      <div class="divider">
        <span>O</span>
      </div>

      <div class="setup-option">
        <h3>Unirse a Sala</h3>
        <input 
          type="text" 
          class="room-id-input" 
          placeholder="ID de la sala"
          maxlength="15"
        />
        <input 
          type="text" 
          class="player-name-input-join" 
          placeholder="Tu nombre"
          maxlength="20"
        />
        <button class="join-room-btn">Unirse</button>
      </div>
    </div>

    <button class="back-btn-setup">← Volver</button>

    <div class="loading-overlay" style="display: none;">
      <div class="loading-spinner"></div>
      <p>Conectando...</p>
    </div>
  `;

  const createBtn = container.querySelector(
    ".create-room-btn"
  ) as HTMLButtonElement;
  const joinBtn = container.querySelector(
    ".join-room-btn"
  ) as HTMLButtonElement;
  const backBtn = container.querySelector(
    ".back-btn-setup"
  ) as HTMLButtonElement;
  const loadingOverlay = container.querySelector(
    ".loading-overlay"
  ) as HTMLElement;

  const playerNameInput = container.querySelector(
    ".player-name-input"
  ) as HTMLInputElement;
  const roomIdInput = container.querySelector(
    ".room-id-input"
  ) as HTMLInputElement;
  const playerNameInputJoin = container.querySelector(
    ".player-name-input-join"
  ) as HTMLInputElement;

  // Crear sala
  createBtn.addEventListener("click", async () => {
    const playerName = playerNameInput.value.trim();

    if (!playerName) {
      alert("Por favor ingresa tu nombre");
      return;
    }

    loadingOverlay.style.display = "flex";

    try {
      const response = await apiService.createRoom(playerName);
      state.setOnlineMode(response.roomId, response.playerId, playerName);
      router.navigate("/online-waiting");
    } catch (error) {
      console.error(error);
      alert(
        "Error al crear sala. Asegúrate de que el servidor esté corriendo."
      );
      loadingOverlay.style.display = "none";
    }
  });

  // Unirse a sala
  joinBtn.addEventListener("click", async () => {
    const roomId = roomIdInput.value.trim();
    const playerName = playerNameInputJoin.value.trim();

    if (!roomId || !playerName) {
      alert("Por favor ingresa el ID de la sala y tu nombre");
      return;
    }

    loadingOverlay.style.display = "flex";

    try {
      const response = await apiService.joinRoom(roomId, playerName);
      state.setOnlineMode(response.roomId, response.playerId, playerName);
      router.navigate("/online-game");
    } catch (error) {
      console.error(error);
      alert("Error al unirse a la sala. Verifica el ID.");
      loadingOverlay.style.display = "none";
    }
  });

  // Volver
  backBtn.addEventListener("click", () => {
    router.navigate("/welcome");
  });

  return container;
}
