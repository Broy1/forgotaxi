import { HomePage } from "./pages/home.js";
import { AboutPage } from "./pages/about.js";
import { CarsPage } from "./pages/cars.js";
import { TermsPage } from "./pages/terms.js";
import { ContactPage } from "./pages/contact.js";

const routes = {
  home: HomePage,
  about: AboutPage,
  cars: CarsPage,
  terms: TermsPage,
  contact: ContactPage
};

export function router() {
  const app = document.getElementById("app");

  const hash = location.hash.replace("#", "") || "home";

  // ACTIVE MENU FIX
  document.querySelectorAll("aside a").forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${hash}`) {
      a.classList.add("active");
    }
  });

  const page = routes[hash] || HomePage;
  app.innerHTML = page();
}