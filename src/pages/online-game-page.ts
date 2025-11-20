import { router } from "../router";
import { state } from "../state";
import { database } from "../firebase-config";
import { ref, onValue, off } from "firebase/database";
import { apiService } from "../api-service";
import type { Choice } from "../state";

export function OnlineGamePage(): HTMLElement {
  const container = document.createElement("div");
  container.className = "page online-game-page";

  const currentState = state.getState();

  const tituloImg = new URL(
    "../images/Piedra Papel Tijera titulo.png",
    import.meta.url
  ).href;
  const piedraImg = new URL("../images/piedra.png", import.meta.url).href;
  const papelImg = new URL("../images/papel.png", import.meta.url).href;
  const tijeraImg = new URL("../images/tijera.png", import.meta.url).href;
  const robotImg = new URL("../images/robot-amigable.jpg", import.meta.url)
    .href;

  container.innerHTML = `
    <div class="game-header">
      <img src="${tituloImg}" alt="Título" class="title-small" />
      <p class="online-indicator">🟢 Online</p>
    </div>

    <div class="game-content">
      <div class="player-section">
        <h2 class="player-label">${currentState.playerName || "Tú"}</h2>
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
        <h2 class="player-label">${currentState.opponentName || "Oponente"}</h2>
        <div class="computer-choice opponent-choice">
          <img src="${robotImg}" alt="Oponente" class="robot-img" />
          <div class="waiting-opponent-text">Esperando...</div>
        </div>
      </div>
    </div>

    <div class="game-status"></div>
  `;

  const choiceButtons = container.querySelectorAll(
    ".choice-btn"
  ) as NodeListOf<HTMLButtonElement>;
  const statusDiv = container.querySelector(".game-status") as HTMLElement;
  const opponentChoiceDiv = container.querySelector(
    ".opponent-choice"
  ) as HTMLElement;

  let hasPlayed = false;
  let myChoice: Choice | null = null;
  let gameRef: any = null;
  let alreadyNavigated = false;

  // Escuchar cambios en tiempo real
  if (currentState.roomId) {
    gameRef = ref(database, `rooms/${currentState.roomId}/currentGame`);

    onValue(gameRef, (snapshot) => {
      const gameData = snapshot.val();

      if (gameData && !alreadyNavigated) {
        const players = Object.keys(gameData);
        const myData = gameData[currentState.playerId || ""];
        const opponentId = players.find((id) => id !== currentState.playerId);

        if (opponentId) {
          const opponent = gameData[opponentId];

          // Verificar si el oponente ya jugó
          if (opponent.start && opponent.choice) {
            opponentChoiceDiv.classList.add("has-played");
            statusDiv.textContent = `${opponent.name} ya jugó!`;

            // Si ambos jugaron, evaluar resultado y navegar
            if (myData && myData.start && myData.choice && hasPlayed) {
              evaluateAndNavigate(myData.choice, opponent.choice, opponentId);
            }
          }

          // Si yo ya jugué pero el oponente no
          if (hasPlayed && (!opponent.start || !opponent.choice)) {
            statusDiv.textContent = `Esperando a ${opponent.name}...`;
          }
        }
      }
    });
  }

  // Manejar jugadas
  choiceButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      if (hasPlayed) return;

      const choice = button.getAttribute("data-choice") as Choice;

      // Deshabilitar botones
      choiceButtons.forEach((btn) => (btn.disabled = true));
      button.classList.add("selected");
      hasPlayed = true;
      myChoice = choice;

      state.setState({ playerChoice: choice });

      // Enviar jugada al backend
      try {
        if (currentState.roomId && currentState.playerId) {
          await apiService.makeMove(
            currentState.roomId,
            currentState.playerId,
            choice
          );
          statusDiv.textContent = "Jugada enviada! Esperando oponente...";

          // Verificar si el oponente ya jugó
          const snapshot = await new Promise<any>((resolve) => {
            const gameRef = ref(
              database,
              `rooms/${currentState.roomId}/currentGame`
            );
            onValue(gameRef, (snap) => resolve(snap), { onlyOnce: true });
          });

          const gameData = snapshot.val();
          const players = Object.keys(gameData);
          const opponentId = players.find((id) => id !== currentState.playerId);

          if (
            opponentId &&
            gameData[opponentId].start &&
            gameData[opponentId].choice
          ) {
            // El oponente ya jugó, evaluar
            evaluateAndNavigate(
              choice,
              gameData[opponentId].choice,
              opponentId
            );
          }
        }
      } catch (error) {
        console.error(error);
        alert("Error al enviar jugada");
        choiceButtons.forEach((btn) => (btn.disabled = false));
        button.classList.remove("selected");
        hasPlayed = false;
      }
    });
  });

  function evaluateAndNavigate(
    playerChoice: Choice,
    opponentChoice: Choice,
    opponentId: string
  ) {
    if (alreadyNavigated) return;
    alreadyNavigated = true;

    const result = state.determineWinner(playerChoice, opponentChoice);

    state.setState({
      result,
      opponentChoice,
    });

    // Limpiar listener
    if (gameRef) {
      off(gameRef);
    }

    // Esperar un momento antes de navegar
    statusDiv.textContent = "¡Evaluando resultado!";
    setTimeout(() => {
      router.navigate("/online-result");
    }, 1500);
  }

  return container;
}
