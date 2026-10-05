// =========================================================
// CULTURA EM FOCO
// JAVASCRIPT
// =========================================================


// =========================================================
// 1. ARRAY DE OBJETOS
// =========================================================

const noticias = [

    {
        titulo: "A cultura que ocupa espaços e transforma a cidade",
        categoria: "Cultura",
        autor: "Marina Alves",
        data: "05/10/2026",

        imagem:
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",

        alt:
            "Público reunido em um show com iluminação colorida"
    },


    {
        titulo: "Novos artistas independentes ganham espaço nos palcos",
        categoria: "Música",
        autor: "Lucas Mendes",
        data: "04/10/2026",

        imagem:
            "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",

        alt:
            "Pessoa cantando em um palco diante de um público"
    },


    {
        titulo: "Tecnologia aproxima jovens da produção audiovisual",
        categoria: "Tecnologia",
        autor: "Rafaela Souza",
        data: "03/10/2026",

        imagem:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",

        alt:
            "Pessoa utilizando um notebook em uma mesa"
    },


    {
        titulo: "Feiras literárias fortalecem novos autores brasileiros",
        categoria: "Literatura",
        autor: "João Oliveira",
        data: "02/10/2026",

        imagem:
            "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",

        alt:
            "Estantes cheias de livros em uma biblioteca"
    },


    {
        titulo: "Cinema nacional recebe novas produções independentes",
        categoria: "Cinema",
        autor: "Camila Santos",
        data: "01/10/2026",

        imagem:
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",

        alt:
            "Sala de cinema com tela iluminada"
    },


    {
        titulo: "Arte urbana transforma muros em galerias a céu aberto",
        categoria: "Cultura",
        autor: "Pedro Lima",
        data: "30/09/2026",

        imagem:
            "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=80",

        alt:
            "Mural colorido de arte urbana em uma parede"
    },


    {
        titulo: "Bibliotecas comunitárias criam novos pontos de encontro",
        categoria: "Cidade",
        autor: "Ana Costa",
        data: "29/09/2026",

        imagem:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",

        alt:
            "Pessoa lendo um livro em uma biblioteca"
    },


    {
        titulo: "Criadores digitais reinventam formas de contar histórias",
        categoria: "Tecnologia",
        autor: "Diego Martins",
        data: "28/09/2026",

        imagem:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80",

        alt:
            "Pessoa trabalhando em um computador para produção digital"
    }

];


// =========================================================
// 2. PEGANDO ELEMENTOS DO HTML
// DOM
// =========================================================

const newsGrid =
    document.getElementById("newsGrid");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const resultCount =
    document.getElementById("resultCount");

const emptyMessage =
    document.getElementById("emptyMessage");


const themeButton =
    document.getElementById("themeButton");


const menuToggle =
    document.getElementById("menuToggle");


const mainNav =
    document.getElementById("mainNav");


const newsletterForm =
    document.getElementById("newsletterForm");


const emailInput =
    document.getElementById("emailInput");


const formMessage =
    document.getElementById("formMessage");


// =========================================================
// 3. FUNÇÃO PARA MOSTRAR AS NOTÍCIAS
// Manipulação do DOM
// =========================================================

function renderizarNoticias(lista) {

    // Limpa os cards anteriores
    newsGrid.innerHTML = "";


    // Percorre o array
    lista.forEach(function(noticia) {

        // Cria um article
        const article =
            document.createElement("article");


        // Adiciona a classe CSS
        article.classList.add("news-card");


        // Coloca o conteúdo dentro do article
        article.innerHTML = `

            <img
                class="news-card-image"
                src="${noticia.imagem}"
                alt="${noticia.alt}"
                loading="lazy"
            >


            <div class="news-card-content">

                <span class="category">
                    ${noticia.categoria}
                </span>


                <h3>
                    ${noticia.titulo}
                </h3>


                <p>
                    Conteúdo em destaque no
                    Cultura em Foco sobre
                    ${noticia.categoria.toLowerCase()}.
                </p>


                <div class="card-meta">

                    <span>
                        Por ${noticia.autor}
                    </span>

                    <span>
                        •
                    </span>

                    <time>
                        ${noticia.data}
                    </time>

                </div>

            </div>
        `;


        // Coloca o article dentro da grade
        newsGrid.appendChild(article);

    });


    // Atualiza contador

    if (lista.length === 1) {

        resultCount.textContent =
            "1 notícia";

    } else {

        resultCount.textContent =
            `${lista.length} notícias`;

    }


    // Mostra mensagem caso não tenha resultado

    emptyMessage.hidden =
        lista.length !== 0;

}



// =========================================================
// 4. FUNÇÃO DE BUSCA E FILTRO
// =========================================================

function atualizarNoticias() {

    // Pega o texto digitado

    const textoBusca =
        searchInput.value
        .toLowerCase()
        .trim();


    // Pega a categoria escolhida

    const categoriaSelecionada =
        categoryFilter.value;


    // Filtra as notícias

    const resultado =
        noticias.filter(function(noticia) {


            // Verifica o título

            const correspondeAoTexto =
                noticia.titulo
                .toLowerCase()
                .includes(textoBusca);


            // Verifica a categoria

            const correspondeACategoria =

                categoriaSelecionada === "Todas"
                ||
                noticia.categoria === categoriaSelecionada;


            // A notícia precisa atender
            // às duas condições

            return
                correspondeAoTexto
                &&
                correspondeACategoria;

        });


    // Mostra o resultado

    renderizarNoticias(resultado);

}



// =========================================================
// 5. RECURSO 1
// BUSCA EM TEMPO REAL
// =========================================================

searchInput.addEventListener(
    "input",
    atualizarNoticias
);



// =========================================================
// 6. RECURSO 2
// FILTRO POR CATEGORIA
// =========================================================

categoryFilter.addEventListener(
    "change",
    atualizarNoticias
);



// =========================================================
// 7. RECURSO 3
// TEMA CLARO/ESCURO
// =========================================================

function aplicarTema(tema) {

    // Adiciona ou remove a classe dark

    document.body.classList.toggle(
        "dark",
        tema === "dark"
    );


    // Altera o botão

    if (tema === "dark") {

        themeButton.textContent = "☀️";

        themeButton.setAttribute(
            "aria-label",
            "Ativar tema claro"
        );

    } else {

        themeButton.textContent = "🌙";

        themeButton.setAttribute(
            "aria-label",
            "Ativar tema escuro"
        );

    }

}



// Quando clicar no botão

themeButton.addEventListener(
    "click",
    function() {


        // Verifica o tema atual

        const novoTema =

            document.body.classList.contains("dark")

            ? "light"

            : "dark";


        // Aplica o novo tema

        aplicarTema(novoTema);


        // SALVA O TEMA
        // BÔNUS

        localStorage.setItem(
            "tema",
            novoTema
        );

    }
);



// Recupera o tema salvo

const temaSalvo =
    localStorage.getItem("tema")
    ||
    "light";


aplicarTema(temaSalvo);



// =========================================================
// 8. RECURSO 4
// MENU MOBILE
// =========================================================

menuToggle.addEventListener(
    "click",
    function() {


        // Abre ou fecha o menu

        const menuAberto =
            mainNav.classList.toggle("open");


        // Atualiza acessibilidade

        menuToggle.setAttribute(
            "aria-expanded",
            menuAberto
        );


        menuToggle.setAttribute(
            "aria-label",

            menuAberto
            ? "Fechar menu"
            : "Abrir menu"
        );

    }
);



// Fecha o menu quando clicar em algum link

mainNav
    .querySelectorAll("a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                mainNav.classList.remove(
                    "open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            }

        );

    });



// =========================================================
// 9. RECURSO 5
// VALIDAÇÃO DO FORMULÁRIO
// =========================================================

newsletterForm.addEventListener(
    "submit",
    function(event) {


        // Impede o formulário
        // de recarregar a página

        event.preventDefault();


        // Pega o email

        const email =
            emailInput.value.trim();


        // Verifica se é válido

        if (
            !emailInput.checkValidity()
            ||
            email === ""
        ) {


            formMessage.textContent =
                "Digite um e-mail válido.";


            formMessage.style.color =
                "#b42318";


            emailInput.focus();


            return;

        }


        // Mensagem de sucesso

        formMessage.textContent =
            "Cadastro realizado com sucesso!";


        formMessage.style.color =
            "#166534";


        // Limpa o formulário

        newsletterForm.reset();

    }
);



// =========================================================
// 10. RENDERIZAÇÃO INICIAL
// =========================================================

renderizarNoticias(noticias);