import navigation from "./router";
import { configSpaLinks } from "./utilities/configSpaLinks";
import { initSideNav } from "./utilities/initSideNav";

import "./assets/styles/main.scss";

navigation(window.location.pathname);

window.addEventListener("load", () => {
  configSpaLinks();
  initSideNav();
});
