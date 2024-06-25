const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quanto é 2+2? ",
        alternativas: [
            {
                texto: "4",
                afirmacao: "afirmação"
            },
            {
                texto: "0" ,
                afirmacao: "afirmação" 
            }

        ]
    },
    {
        enunciado: "Quanto é 5−5?",
        alternativas: [
            {
                texto: "0",
                afirmacao: "afirmação"
            },
            {
                texto: "10",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quanto é 4x5?",
        alternativas: [
            {
                texto: "20",
                afirmacao: "afirmação"
            },
            {
                texto: "9",
                afirmacao: "afirmação"
            }

        ]
    },
    {
        enunciado: "Quanto é 6÷3?",
        alternativas: [
            {
                texto: "3",
                afirmacao: "afirmação"
            },
            {
                texto: "2",
                afirmacao: "afirmação"
            }


        ]
    },
    {
        enunciado: "Quanto é √4?",
        alternativas: [
            {
                texto: "2",
                afirmacao: "afirmação"
            },
            {
                texto:"8",
                afirmacao: "afirmação"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal +=afirmacoes + " ";
    atual++; 
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Parabéns os seus conhecimentos matemáticos estao muito bons.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();
