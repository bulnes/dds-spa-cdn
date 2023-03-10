import navigation from "@/router";
import "@/assets/styles/main.scss";
import { configSpaLinks } from "@/utilities/configSPALinks.js";
import { initSideNav } from "@/utilities/initSidenav.js";

navigation(window.location.pathname);

window.addEventListener("load", () => {
  configSpaLinks();
  initSideNav();
});
