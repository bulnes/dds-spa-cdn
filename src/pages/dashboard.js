const dashboard = () => {
  const conteudo = `
    <thead class="thead-dark">
      <tr>
        <th scope="col">CPF</th>
        <th scope="col">Nome</th>
        <th scope="col"></th>
        <th scope="col">
          <a class="btn btn-primary" onclick="navigation('/cadastro'); return false;">
            Novo Cliente
          </a>
        </th>
      </tr>
    </thead>
  `;

  const tabela = document.createElement("table");
  tabela.innerHTML = conteudo;
  tabela.classList.add("table");

  return tabela;
};

export default dashboard;
