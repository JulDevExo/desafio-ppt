type Route = {
  path: string;
  component: () => HTMLElement;
};

class Router {
  private routes: Route[] = [];
  private rootElement: HTMLElement | null = null;

  constructor() {
    // Escuchar cambios en el historial
    window.addEventListener("popstate", () => {
      this.render();
    });
  }

  setRootElement(element: HTMLElement) {
    this.rootElement = element;
  }

  addRoute(path: string, component: () => HTMLElement) {
    this.routes.push({ path, component });
  }

  navigate(path: string) {
    window.history.pushState({}, "", path);
    this.render();
  }

  private render() {
    if (!this.rootElement) return;

    const path = window.location.pathname;
    const route = this.routes.find((r) => r.path === path) || this.routes[0];

    if (route) {
      this.rootElement.innerHTML = "";
      const component = route.component();
      this.rootElement.appendChild(component);
    }
  }

  init() {
    // Si la ruta es la raíz, navegar a /welcome
    if (window.location.pathname === "/") {
      this.navigate("/welcome");
    } else {
      this.render();
    }
  }
}

export const router = new Router();
