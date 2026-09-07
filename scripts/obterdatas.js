const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

document.getElementById("anoAtual").textContent = anoAtual;

const dataModificacao =  new Date(document.lastModified);


document.getElementById("ultimaModificacao").textContent = dataModificacao.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });