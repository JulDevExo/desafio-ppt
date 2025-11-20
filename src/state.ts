type Choice = "piedra" | "papel" | "tijera";

interface GameState {
  // Modo local
  playerChoice: Choice | null;
  computerChoice: Choice | null;
  result: "win" | "lose" | "tie" | null;
  wins: number;
  losses: number;

  // Modo online
  gameMode: "local" | "online";
  roomId: string | null;
  playerId: string | null;
  playerName: string | null;
  opponentName: string | null;
  opponentChoice: Choice | null;
  isWaiting: boolean;
  onlineWins: number;
  onlineLosses: number;
}

class State {
  private state: GameState;
  private listeners: Array<() => void> = [];

  constructor() {
    // Cargar datos del localStorage
    const savedWins = localStorage.getItem("wins");
    const savedLosses = localStorage.getItem("losses");

    this.state = {
      playerChoice: null,
      computerChoice: null,
      result: null,
      wins: savedWins ? parseInt(savedWins) : 0,
      losses: savedLosses ? parseInt(savedLosses) : 0,

      // Online state
      gameMode: "local",
      roomId: null,
      playerId: null,
      playerName: null,
      opponentName: null,
      opponentChoice: null,
      isWaiting: false,
      onlineWins: 0,
      onlineLosses: 0,
    };
  }

  getState(): GameState {
    return { ...this.state };
  }

  setState(newState: Partial<GameState>) {
    this.state = { ...this.state, ...newState };

    // Guardar en localStorage si hay cambios en wins o losses (modo local)
    if (newState.wins !== undefined) {
      localStorage.setItem("wins", this.state.wins.toString());
    }
    if (newState.losses !== undefined) {
      localStorage.setItem("losses", this.state.losses.toString());
    }

    this.notifyListeners();
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener());
  }

  // Juego local (vs computadora)
  playGame(playerChoice: Choice) {
    const choices: Choice[] = ["piedra", "papel", "tijera"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result: "win" | "lose" | "tie";

    if (playerChoice === computerChoice) {
      result = "tie";
    } else if (
      (playerChoice === "piedra" && computerChoice === "tijera") ||
      (playerChoice === "papel" && computerChoice === "piedra") ||
      (playerChoice === "tijera" && computerChoice === "papel")
    ) {
      result = "win";
      this.setState({ wins: this.state.wins + 1 });
    } else {
      result = "lose";
      this.setState({ losses: this.state.losses + 1 });
    }

    this.setState({
      playerChoice,
      computerChoice,
      result,
    });
  }

  // Determinar ganador en modo online
  determineWinner(
    playerChoice: Choice,
    opponentChoice: Choice
  ): "win" | "lose" | "tie" {
    if (playerChoice === opponentChoice) {
      return "tie";
    } else if (
      (playerChoice === "piedra" && opponentChoice === "tijera") ||
      (playerChoice === "papel" && opponentChoice === "piedra") ||
      (playerChoice === "tijera" && opponentChoice === "papel")
    ) {
      return "win";
    } else {
      return "lose";
    }
  }

  resetGame() {
    this.setState({
      playerChoice: null,
      computerChoice: null,
      result: null,
      opponentChoice: null,
      isWaiting: false,
    });
  }

  resetScore() {
    this.setState({
      wins: 0,
      losses: 0,
    });
    localStorage.removeItem("wins");
    localStorage.removeItem("losses");
  }

  // Configurar modo online
  setOnlineMode(roomId: string, playerId: string, playerName: string) {
    this.setState({
      gameMode: "online",
      roomId,
      playerId,
      playerName,
    });
  }

  // Volver a modo local
  setLocalMode() {
    this.setState({
      gameMode: "local",
      roomId: null,
      playerId: null,
      playerName: null,
      opponentName: null,
      opponentChoice: null,
      isWaiting: false,
    });
  }
}

export const state = new State();
export type { Choice, GameState };
