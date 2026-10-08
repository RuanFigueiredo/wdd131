//obter ano atual
document.addEventListener("DOMContentLoaded", () => {
const anoAtual = new Date().getFullYear();
const elementoDoAno = document.querySelector("#anoAtual");
if(elementoDoAno) {
    elementoDoAno.textContent = anoAtual;
}
//obter  ultima data de modificação
const dataModificacao = new Date(document.lastModified);
const elementoDaModificacao = document.querySelector("#ultimaModificacao");
if(elementoDaModificacao) {
    elementoDaModificacao.textContent = dataModificacao.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
});


const produtos = [
  {
    id: "fc-1888",
    nome: "capacitor de fluxo",
    classificacaomedia: 4.5
  },
  {
    id: "fc-2050",
    nome: "fios elétricos",
    classificacaomedia: 4.7
  },
  {
    id: "fs-1987",
    nome: "circuitos de tempo",
    classificacaomedia: 3.5
  },
  {
    id: "ac-2000",
    nome: "reator de baixa tensão",
    classificacaomedia: 3.9
  },
  {
    id: "jj-1969",
    nome: "equalizador de distorção",
    classificacaomedia: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
    // Verifica se estamos na página de avaliação para atualizar o contador
    const displayContador = document.querySelector("#contador");
    if (displayContador) {
        let numAvaliacoes = Number(window.localStorage.getItem("numAvaliacoes-ls")) || 0;
        numAvaliacoes++;
        window.localStorage.setItem("numAvaliacoes-ls", numAvaliacoes);
        displayContador.textContent = numAvaliacoes;
    }
});