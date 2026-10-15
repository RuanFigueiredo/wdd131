document.addEventListener("DOMContentLoaded", () => {
    // 1. Obter ano atual e última modificação (Rodapé)
    const anoAtual = new Date().getFullYear();
    const elementoDoAno = document.querySelector("#anoAtual");
    if (elementoDoAno) {
        elementoDoAno.textContent = anoAtual;
    }

    const elementoDaModificacao = document.querySelector("#dataModificacao");
    if (elementoDaModificacao) {
        const dataModificacao = new Date(document.lastModified);
        elementoDaModificacao.textContent = dataModificacao.toLocaleDateString('pt-BR', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric' 
        });
    }

    // 2. Menu Hamburguer Responsivo (Interação DOM e Eventos)
    const hamburguerButton = document.querySelector("#hamburguer-button");
    const menu = document.querySelector("#menu");

    if (hamburguerButton && menu) {
        hamburguerButton.addEventListener("click", () => {
            menu.classList.toggle("ativo");
            const expanded = hamburguerButton.getAttribute("aria-expanded") === "true" || false;
            hamburguerButton.setAttribute("aria-expanded", !expanded);
            menu.toggleAttribute("aria-hidden");
        });
    }

    // 3. Array de Produtos / Itens do Cardápio (Objetos e Métodos de Array)
    const produtos = [
        { id: 1, nome: "Bauru", descricao: "Pão, carne, queijo, presunto, tomate e alface.", imagem: "imagens/bauru.webp" },
        { id: 2, nome: "X-Tudo", descricao: "Pão, hambúrguer, queijo, presunto, bacon, ovo, alface e tomate.", imagem: "imagens/x-tudo.webp" },
        { id: 3, nome: "X-Bacon", descricao: "Pão, hambúrguer, muito bacon crocante e queijo derretido.", imagem: "imagens/x-bacon.webp" },
        { id: 4, nome: "X-Salada", descricao: "Pão, hambúrguer, queijo, alface, tomate e maionese especial.", imagem: "imagens/x-salada.webp" },
        { id: 5, nome: "X-Egg", descricao: "Pão, hambúrguer, queijo e ovo frito com gema mole.", imagem: "imagens/x-egg.webp" },
        { id: 6, nome: "Simples", descricao: "Pão, hambúrguer tradicional e queijo.", imagem: "imagens/simples.webp" }
    ];

    // 4. Renderização Dinâmica do Cardápio (Template Literals)
    const mainCardapio = document.querySelector("main");
    // Verifica se estamos na página de cardápio conferindo se há um elemento específico ou título adequado
    if (mainCardapio && window.location.pathname.includes("cardapio.html")) {
        mainCardapio.innerHTML = `<h1>Cardápio</h1><div class="cardapio-grid"></div>`;
        const gridContainer = mainCardapio.querySelector(".cardapio-grid");

        produtos.forEach(produto => {
            // Uso exclusivo de template literals
            const figureHTML = `
                <figure>
                    <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
                    <figcaption>
                        <strong>${produto.nome}</strong>
                        <p>${produto.descricao}</p>
                    </figcaption>
                </figure>
            `;
            gridContainer.innerHTML += figureHTML;
        });
    }

    // 5. Preenchimento Dinâmico do Select de Produtos (no formulário)
    const selectProduto = document.querySelector("#nome-produto");
    if (selectProduto) {
        produtos.forEach(produto => {
            const option = document.createElement("option");
            option.value = produto.nome;
            option.textContent = produto.nome;
            selectProduto.appendChild(option);
        });
    }

    // 6. Uso de localStorage para Contagem de Avaliações / Acessos
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", () => {
            let totalAvaliacoes = Number(localStorage.getItem("avaliacoes_contador")) || 0;
            totalAvaliacoes++;
            localStorage.setItem("avaliacoes_contador", totalAvaliacoes);
        });
    }
});

