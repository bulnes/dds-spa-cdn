import initTable from "./pages/index";
import initOther from "./pages/other";

const routes = {
  "/": initTable,
  "/other": initOther,
};

const rootDiv = document.querySelector("[data-container]");

const navigation = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  rootDiv.innerHTML = "";

  const initRoute = routes[window.location.pathname];
  rootDiv.appendChild(initRoute());
};

window.navigation = navigation;

window.onpopstate = () => {
  rootDiv.innerHTML = "";

  const route = routes[window.location.pathname];
  rootDiv.appendChild(route());
};

export default navigation;
