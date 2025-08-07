const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você achou um mapa misterioso. O que faz?",
        alternativas: [
            {
                texto:"Ir até as ruínas sozinho"
            },
            
            "Mostrar o mapa ao mago Arion"
        ]
    },
    {
        enunciado: "O mago Arion avisa sobre o perigo. O que você decide?",
        alternativas: [
            "Pedir ajuda ao mago",
            "Agradecer e ir sozinho"
        ]
    },
    {
        enunciado: "Chegando nas ruínas, há um portão mágico. O que faz?",
        alternativas: [
            "Tocar o portão",
            "Tentar entrar pela floresta"
        ]
    },
    {
        enunciado: "Você está em perigo. Qual atitude toma?",
        alternativas: [
            "Lutar contra os monstros",
            "Fugir e se esconder"
        ]
    },
    {
        enunciado: "Você encontra o artefato. Qual decisão toma?",
        alternativas: [
            "Usar o artefato para obter poder",
            "Destruir o artefato para salvar o reino"
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    perguntaAtul = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
