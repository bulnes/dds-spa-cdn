const initOther = () => {
  const conteudo = `
    <blockquote class="blockquote text-center">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates totam nemo culpa distinctio non voluptatibus perferendis eveniet itaque id voluptatem dolor asperiores similique corrupti numquam sunt, assumenda expedita aperiam magni.
    </blockquote>
  `;

  const tabela = document.createElement("div");
  tabela.innerHTML = conteudo;

  return tabela;
};

export default initOther;
