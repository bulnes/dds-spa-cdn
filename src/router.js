import initTable from "./pages/index";
import initOther from "./pages/other";

const rotas = {
  "/": initTable,
  "/other": initOther,
};

const rootDiv = document.querySelector("[data-container]");

const navegacao = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  rootDiv.innerHTML = "";

  const iniciarRota = rotas[window.location.pathname];

  rootDiv.appendChild(iniciarRota());
};

window.navegacao = navegacao;

// evento de retirada de uma sessão do histórico
window.onpopstate = () => {
  rootDiv.innerHTML = "";

  const rota = rotas[window.location.pathname];

  rootDiv.appendChild(rota());
};

export default navegacao;
