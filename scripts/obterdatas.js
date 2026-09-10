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