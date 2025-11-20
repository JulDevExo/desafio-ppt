const API_BASE_URL = "http://localhost:3000/api";

export const apiService = {
  // Crear un room
  async createRoom(playerName: string) {
    const response = await fetch(`${API_BASE_URL}/rooms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playerName }),
    });

    if (!response.ok) {
      throw new Error("Error al crear room");
    }

    return response.json();
  },

  // Unirse a un room
  async joinRoom(roomId: string, playerName: string) {
    const response = await fetch(`${API_BASE_URL}/rooms/${roomId}/join`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playerName }),
    });

    if (!response.ok) {
      throw new Error("Error al unirse al room");
    }

    return response.json();
  },

  // Hacer una jugada
  async makeMove(roomId: string, playerId: string, choice: string) {
    const response = await fetch(`${API_BASE_URL}/rooms/${roomId}/play`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playerId, choice }),
    });

    if (!response.ok) {
      throw new Error("Error al hacer jugada");
    }

    return response.json();
  },

  // Finalizar partida
  async finishGame(roomId: string, winnerId: string | null) {
    const response = await fetch(`${API_BASE_URL}/rooms/${roomId}/finish`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ winnerId }),
    });

    if (!response.ok) {
      throw new Error("Error al finalizar partida");
    }

    return response.json();
  },

  // Obtener score
  async getScore(roomId: string) {
    const response = await fetch(`${API_BASE_URL}/rooms/${roomId}/score`);

    if (!response.ok) {
      throw new Error("Error al obtener score");
    }

    return response.json();
  },
};
