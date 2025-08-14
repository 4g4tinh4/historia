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
                texto:"Ir até as ruínas sozinho",
                afirmacao: "afirmacao"
            },
            {
                texto:"Mostrar o mapa ao mago Arion",
                afirmacao: "afirmacao"
            } 
        ]
    },
    {
        enunciado: "O mago Arion avisa sobre o perigo. O que você decide?",
        alternativas: [
        {
            texto:"Pedir ajuda ao mago",
            afirmacao: "afirmacao"
        },
        {
            texto:"Agradecer e ir sozinho",
            afirmacao:"afirmacao"
        }
    ]
    },
    {
        enunciado: "Chegando nas ruínas, há um portão mágico. O que faz?",
        alternativas: [
            {
                texto:"Tocar o portão",
                afirmacao:"afirmacao"
            },
            {
                texto:"Tentar entrar pela floresta",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Você está em perigo. Qual atitude toma?",
        alternativas: [
            {
                texto:"Lutar contra os monstros",
                afirmacao:"afirmacao"
            },
            {
                texto:"Fugir e se esconder",
                afirmacao:"afirmacao"
            }  
        ]
    },
    {
        enunciado: "Você encontra o artefato. Qual decisão toma?",
        alternativas: [
            {
                texto:"Usar o artefato para obter poder",
                afirmacao:"afirmacao"
            },
            {
                texto:"Destruir o artefato para salvar o reino",
                afirmacao:"afirmacao"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    perguntaAtul = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function())
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();
