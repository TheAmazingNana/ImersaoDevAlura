let characters = [
    {
      nome: "Naruto Uzumaki",
      cla: "Uzumaki",
      tipoSanguineo: "B",
      primeiraAparicao: "Naruto Episódio 1",
      descricao: "Naruto Uzumaki é o protagonista da série. Ele é um ninja da Vila da Folha e carrega dentro de si a Raposa de Nove Caudas, Kurama. Seu sonho é se tornar Hokage e ser reconhecido por todos na vila. Ao longo da série, Naruto desenvolve grande poder e se torna um dos ninjas mais fortes da história.",
      urlImagem: "./images/naruto.jpg",
      urlWiki: "https://naruto.fandom.com/pt-br/wiki/Naruto_Uzumaki"
    },
    {
      nome: "Sakura Haruno",
      cla: "Haruno",
      tipoSanguineo: "O",
      primeiraAparicao: "Naruto Episódio 1",
      descricao: "Sakura Haruno é uma ninja da Vila da Folha e membro do Time 7. Ela começa a série com uma grande admiração por Sasuke e com pouca habilidade em batalha, mas com o tempo se torna uma das melhores médicas-ninjas do mundo, treinada por Tsunade, a Quinta Hokage.",
      urlImagem: "./images/sakura.jpg",
      urlWiki: "https://naruto.fandom.com/pt-br/wiki/Sakura_Haruno"
    },
    {
      nome: "Hinata Hyuuga",
      cla: "Hyuuga",
      tipoSanguineo: "A",
      primeiraAparicao: "Naruto Episódio 1",
      descricao: "Hinata Hyuuga é uma ninja da Vila da Folha e membro do clã Hyuuga, conhecido pelo seu poderoso dojutsu, o Byakugan. Desde a infância, Hinata tem uma profunda admiração por Naruto, e ao longo da série ela se torna mais forte e confiante, se casando com Naruto no final da série.",
      urlImagem: "./images/hinata.jpg",
      urlWiki: "https://naruto.fandom.com/pt-br/wiki/Hinata_Hyuga"
    },
    {
      nome: "Rock Lee",
      cla: "N/A",
      tipoSanguineo: "A",
      primeiraAparicao: "Naruto Episódio 21",
      descricao: "Rock Lee é um ninja da Vila da Folha, conhecido por sua incrível habilidade em taijutsu. Incapaz de usar ninjutsu ou genjutsu, ele compensa suas limitações com treinamento exaustivo e determinação inabalável. Ele é treinado por Might Guy, de quem herda o estilo de luta e a filosofia de vida.",
      urlImagem: "./images/rock-lee.jpg",
      urlWiki: "https://naruto.fandom.com/pt-br/wiki/Rock_Lee"
    },
    {
      nome: "Kakashi Hatake",
      cla: "Hatake",
      tipoSanguineo: "O",
      primeiraAparicao: "Naruto Episódio 3",
      descricao: "Kakashi Hatake é o líder do Time 7 e um dos ninjas mais talentosos da Vila da Folha. Conhecido como 'O Ninja Copiador' por sua habilidade de copiar qualquer técnica que vê com seu Sharingan, Kakashi é um ninja experiente e sábio, com um passado trágico relacionado a seus antigos companheiros de equipe.",
      urlImagem: "./images/kakashi.jpg",
      urlWiki: "https://naruto.fandom.com/pt-br/wiki/Kakashi_Hatake"
    },
    {
      nome: "Sasuke Uchiha",
      cla: "Uchiha",
      tipoSanguineo: "AB",
      primeiraAparicao: "Naruto Episódio 1",
      descricao: "Sasuke Uchiha é um dos últimos membros do clã Uchiha. Ele busca vingança contra seu irmão, Itachi, que exterminou seu clã. Ao longo da série, Sasuke segue um caminho sombrio, abandonando a Vila da Folha e buscando poder a qualquer custo, até finalmente redescobrir seu verdadeiro propósito.",
      urlImagem: "./images/sasuke.jpg",
      urlWiki: "https://naruto.fandom.com/pt-br/wiki/Sasuke_Uchiha"
    },
    {
      nome: "Obito Uchiha",
      cla: "Uchiha",
      tipoSanguineo: "O",
      primeiraAparicao: "Naruto Shippuden Episódio 119",
      descricao: "Obito Uchiha era companheiro de equipe de Kakashi e Rin. Ele foi dado como morto após um incidente durante uma missão, mas foi salvo por Madara Uchiha. Sob a influência de Madara, Obito se torna o principal antagonista em grande parte da série, agindo como o líder mascarado da Akatsuki.",
      urlImagem: "./images/obito.jpg",
      urlWiki: "https://naruto.fandom.com/pt-br/wiki/Obito_Uchiha"
    },
    {
      nome: "Madara Uchiha",
      cla: "Uchiha",
      tipoSanguineo: "O",
      primeiraAparicao: "Naruto Shippuden Episódio 130",
      descricao: "Madara Uchiha foi um dos fundadores da Vila da Folha e o líder lendário do clã Uchiha. Ele buscou a paz através do controle total do mundo ninja, e sua influência é sentida em toda a série, especialmente durante a Quarta Grande Guerra Ninja, onde ele ressuscita e luta contra as forças aliadas.",
      urlImagem: "./images/madara.jpg",
      urlWiki: "https://naruto.fandom.com/pt-br/wiki/Madara_Uchiha"
    },
    {
      nome: "Gaara",
      cla: "N/A",
      tipoSanguineo: "AB",
      primeiraAparicao: "Naruto Episódio 20",
      descricao: "Gaara é o jinchuuriki da besta de uma cauda, Shukaku, e se torna o Kazekage da Vila da Areia. No início, Gaara é um personagem sombrio e violento devido à sua infância solitária, mas após sua derrota para Naruto, ele muda e se torna um líder sábio e respeitado.",
      urlImagem: "./images/gaara.jpg",
      urlWiki: "https://naruto.fandom.com/pt-br/wiki/Gaara"
    },
    {
      nome: "Pain (Nagato)",
      cla: "Uzumaki",
      tipoSanguineo: "A",
      primeiraAparicao: "Naruto Shippuden Episódio 128",
      descricao: "Pain, cujo verdadeiro nome é Nagato, foi o líder da Akatsuki e um dos principais vilões da série. Ele acredita que a dor e o sofrimento são a chave para alcançar a paz mundial. Nagato foi um dos alunos de Jiraiya e usou o Rinnegan para controlar os corpos de Pain e executar suas ambições.",
      urlImagem: "./images/pain.jpg",
      urlWiki: "https://naruto.fandom.com/pt-br/wiki/Nagato"
    }
  ];