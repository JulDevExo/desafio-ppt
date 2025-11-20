import { router } from "../router";
import { state } from "../state";
import { database } from "../firebase-config";
import { ref, onValue, off } from "firebase/database";

export function OnlineWaitingPage(): HTMLElement {
  const container = document.createElement("div");
  container.className = "page online-waiting-page";

  const currentState = state.getState();

  container.innerHTML = `
    <h2 class="waiting-title">Esperando oponente...</h2>
    
    <div class="room-info">
      <p class="room-label">ID de la Sala:</p>
      <div class="room-id-display">
        <span class="room-id-text">${currentState.roomId}</span>
        <button class="copy-btn" title="Copiar">📋</button>
      </div>
      <p class="room-instruction">Comparte este ID con tu oponente</p>
    </div>

    <div class="waiting-animation">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>

    <p class="waiting-message">Esperando que alguien se una a la sala...</p>

    <button class="cancel-btn">Cancelar</button>
  `;

  const copyBtn = container.querySelector(".copy-btn") as HTMLButtonElement;
  const cancelBtn = container.querySelector(".cancel-btn") as HTMLButtonElement;
  const waitingMessage = container.querySelector(
    ".waiting-message"
  ) as HTMLElement;

  // Copiar room ID
  copyBtn.addEventListener("click", () => {
    if (currentState.roomId) {
      navigator.clipboard.writeText(currentState.roomId);
      copyBtn.textContent = "✓";
      setTimeout(() => {
        copyBtn.textContent = "📋";
      }, 2000);
    }
  });

  // Variable para guardar la referencia del listener
  let gameRef: any = null;
  let unsubscribe: (() => void) | null = null;

  // Escuchar cambios en la base de datos
  if (currentState.roomId) {
    console.log("Esperando en room:", currentState.roomId);
    gameRef = ref(database, `rooms/${currentState.roomId}/currentGame`);

    unsubscribe = onValue(
      gameRef,
      (snapshot) => {
        const gameData = snapshot.val();
        console.log("Firebase update:", gameData);

        if (gameData) {
          const players = Object.keys(gameData);
          console.log("Número de jugadores:", players.length);

          // Si hay 2 jugadores, iniciar el juego
          if (players.length >= 2) {
            // Encontrar el nombre del oponente
            const opponentId = players.find(
              (id) => id !== currentState.playerId
            );
            if (opponentId) {
              console.log("Oponente encontrado:", gameData[opponentId].name);
              state.setState({
                opponentName: gameData[opponentId].name,
              });
            }

            // Desuscribirse antes de navegar
            if (unsubscribe) {
              off(gameRef);
            }

            waitingMessage.textContent = "¡Oponente encontrado! Iniciando...";

            setTimeout(() => {
              router.navigate("/online-game");
            }, 500);
          }
        }
      },
      (error) => {
        console.error("Error en Firebase listener:", error);
        waitingMessage.textContent = "Error de conexión. Intenta de nuevo.";
      }
    );
  }

  // Cancelar
  cancelBtn.addEventListener("click", () => {
    if (unsubscribe) {
      off(gameRef);
    }
    state.setLocalMode();
    router.navigate("/welcome");
  });

  return container;
}
