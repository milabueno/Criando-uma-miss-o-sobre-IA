const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Agosto de 2025. Ainda na escola, vivemos um momento singular diante do avanço da Inteligência Artificial (IA). Sistemas digitais com a capacidade de produzirem textos, imagens e aúdios de forma tão realista que não somos capazes de diferenciar entre o humano e a IA tornou-se um grande desafio.Esse cenário impõe reflexões éticas, sociais e culturais, nos mostrando que a IA não é apenas uma ferramenta para nos auxiliar no dia a dia, mas sim, um agente capaz de transformar profundamente a vida em sociedade.Dessa forma, surge uma nova etapa histórica, na qual o mundo não retornará ao que era antes.",
        alternativas: [
            {
                texto: "Isso é horrível!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é perfeito!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, um professor de programação do colégio Marins, decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ele pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual serai a sua atitude?",
        alternativas: [
            {
                texto: "Usar uma ferramenta de busca da internet que tenha inteligência artificial para ajudar a achar informações importantes para o trabalho e explicar de um jeito mais compreencivo de entender."
                
            },
            {
                texto: "Fazer o trabalho usando as conversas que teve com os colegas, algumas pesquisas na internet e também o que eu já sabia sobre o assunto.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, o professor realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA consegue criar novas oportunidades de emprego e aprimorar habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Se preocupa com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem usando um apicativo de design como o Canva.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de química para entregar na semana seguinte, o andamento do trabalho está um atrasado e uma pessoa do seu grupo decidiu fazer com ajuda do chat jpt. O problema é que o trabalho está totalmente igual ao do apicativo. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat é uma tecnologia muito avançada, mas é preciso manter a atenção porque assim com qualquer outra máquina, ele também erra, por isso revisar o trabalho é extremamente importante.",
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2050...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
