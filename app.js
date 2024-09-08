window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  const sticky = header.offsetTop;

  if (window.scrollY > sticky) {
      header.classList.add('fixed-header');
  } else {
      header.classList.remove('fixed-header');
  }
});

function renderCharacters() {
  const section = document.getElementById("resultados-pesquisa");

  let resultados = "";

  for (let character of characters) {
      resultados += `
          <div class="item-resultado">
              <img src="${character.urlImagem}" alt="${character.nome}" class="imagem-personagem" />
              <div class="descricao-personagem">
                  <h2><a href="${character.urlWiki}" target="_blank">${character.nome}</a></h2>
                  <p><strong>👉 Clã:</strong> ${character.cla}</p>
                  <p><strong>👉 Tipo Sanguíneo:</strong> ${character.tipoSanguineo}</p>
                  <p><strong>👉 Primeira Aparição:</strong> ${character.primeiraAparicao}</p>
                  <p class="descricao-meta"> ${character.descricao}</p>
              </div>
          </div>
      `;
  }

  section.innerHTML = resultados;
}

document.getElementById("form-pesquisa").addEventListener("submit", (e) => {
  e.preventDefault();
  pesquisar();
});

function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    renderCharacters();
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  for (let character of characters) {
    let nome = character.nome.toLowerCase();
    let descricao = character.descricao.toLowerCase();
    let tags = character.cla.toLowerCase(); 

    if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
          <img src="${character.urlImagem}" alt="${character.nome}" class="imagem-personagem" />
          <div class="descricao-personagem">
            <h2><a href="${character.urlWiki}" target="_blank">${character.nome}</a></h2>
            <p class="descricao-meta">${character.descricao}</p>
          </div>
        </div>
      `;
    }
  }

  if (!resultados) {
    section.innerHTML = '<h2 class="nao-encontrado">Nada foi encontrado com o termo digitado. Por favor, tente novamente.</h2>'
  } else {
    section.innerHTML = resultados;
  }
}
