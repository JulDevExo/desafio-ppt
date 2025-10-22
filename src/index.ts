import { router } from "./router";
import { WelcomePage } from "./pages/welcome-page";
import { GamePage } from "./pages/game-page";
import { ResultPage } from "./pages/result-page";
import { ScorePage } from "./pages/score-page";

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // Configurar el elemento root
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Elemento #root no encontrado");
    return;
  }

  router.setRootElement(rootElement);

  // Registrar todas las rutas
  router.addRoute("/welcome", WelcomePage);
  router.addRoute("/game", GamePage);
  router.addRoute("/result", ResultPage);
  router.addRoute("/score", ScorePage);

  // Iniciar la aplicación
  router.init();

  console.log("Aplicación Piedra, Papel o Tijera cargada");
});
