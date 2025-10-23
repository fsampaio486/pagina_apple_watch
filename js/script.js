const imagemVisuailizacao = document.querySelector("#visualizacao img");
const tituloProduto = document.querySelector("h1");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img');

const opcoesTamanho = ["41 mm", "45 mm"];
const opcoesCores = [
  "verde-cipreste",
  "azul-inverno",
  "meia-noite",
  "estelar",
  "rosa-claro",
];

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;

function atualizarCorSelecionada() {
  const opcaoCorSelecionada = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);

  numCorSelecionada = opcaoCorSelecionada;

  const nomeCor = opcoesCores[numCorSelecionada];

  nomeCorSelecionada.innerText =
    "Cor - " + nomeCor.charAt(0).toUpperCase() + nomeCor.slice(1).toLowerCase();

  tituloProduto.innerHTML =
    "Pulseira loop esportiva " +
    nomeCor.toLowerCase() +
    " para caixa de " +
    opcoesTamanho[numTamanhoSelecionado];

  imagemVisuailizacao.src =
    "./img/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-" +
    numImagemSelecionada +
    ".jpeg";

  imagemMiniatura0.src =
    "./img/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-0.jpeg";

  imagemMiniatura1.src =
    "./img/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-1.jpeg";

  imagemMiniatura2.src =
    "./img/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/imagem-2.jpeg";
}

function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);

  numTamanhoSelecionado = opcaoTamanhoSelecionado;

  const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado];

  tituloProduto.innerText =
    "Pulseira loop esportivo " +
    opcoesCores[numCorSelecionada].toLocaleLowerCase() +
    " para caixa de " +
    tamanhoCaixa;

  if (tamanhoCaixa === "41 mm") {
    imagemVisuailizacao.classList.add("caixa-pequena");
  } else {
    imagemVisuailizacao.classList.remove("caixa-pequena");
  }
}

function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);

  numImagemSelecionada = opcaoImagemSelecionada;

  console.log(opcaoImagemSelecionada);

  imagemVisuailizacao.src =
    "./img/opcoes-cores/imagens-" +
    opcoesCores[numCorSelecionada] +
    "/imagem-" +
    numImagemSelecionada +
    ".jpeg";
}
