import navigation from "./router";
import "./assets/styles/main.scss";
import { configSpaLinks } from "./utilities/configSPALinks";
import { initSideNav } from "./utilities/initSidenav";

navigation(window.location.pathname);

window.addEventListener("load", () => {
  configSpaLinks();
  initSideNav();
});
