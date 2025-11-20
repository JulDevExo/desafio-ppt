import { router } from "./router";
import { WelcomePage } from "./pages/welcome-page";
import { ModeSelectionPage } from "./pages/mode-selection-page";
import { GamePage } from "./pages/game-page";
import { ResultPage } from "./pages/result-page";
import { ScorePage } from "./pages/score-page";
import { OnlineSetupPage } from "./pages/online-setup-page";
import { OnlineWaitingPage } from "./pages/online-waiting-page";
import { OnlineGamePage } from "./pages/online-game-page";
import { OnlineResultPage } from "./pages/online-result-page";
import { OnlineScorePage } from "./pages/online-score-page";

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // Configurar el elemento root
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Elemento #root no encontrado");
    return;
  }

  router.setRootElement(rootElement);

  // Registrar todas las rutas - Modo local
  router.addRoute("/welcome", WelcomePage);
  router.addRoute("/mode-selection", ModeSelectionPage);
  router.addRoute("/game", GamePage);
  router.addRoute("/result", ResultPage);
  router.addRoute("/score", ScorePage);

  // Registrar rutas - Modo online
  router.addRoute("/online-setup", OnlineSetupPage);
  router.addRoute("/online-waiting", OnlineWaitingPage);
  router.addRoute("/online-game", OnlineGamePage);
  router.addRoute("/online-result", OnlineResultPage);
  router.addRoute("/online-score", OnlineScorePage);

  // Iniciar la aplicación
  router.init();

  console.log(
    "Aplicación Piedra, Papel o Tijera cargada - Modo Multijugador Online"
  );
});
