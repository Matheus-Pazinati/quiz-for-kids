const temaEscolhido = localStorage.getItem("temaFundo")
const corOpcoes = localStorage.getItem("temaOpcoes")
const imagemTema = document.querySelector('[data-opcoes]')
imagemTema.classList.add(temaEscolhido)
const opcoesResposta = document.querySelectorAll('.resposta')
opcoesResposta.forEach(function(opcao){
  opcao.classList.add(corOpcoes)
})

const perguntasPortugues = new Array()
const perguntasHistGeo = new Array()
const perguntasCiencias = new Array()
const perguntasGerais = new Array()

perguntasPortugues[0] = {
  pergunta: "1- Qual sinônimo de rápido?",
  opcoes: ["Demorado", "Lento", "Ágil", "Pausado"],
  resposta: "Ágil"
}
perguntasPortugues[1] = {
  pergunta: "2- Qual o plural da palavra Capitão?",
  opcoes: ["Capitães", "Capitãos", "Capitões", "Capitãoes"],
  resposta: "Capitães"
}
perguntasPortugues[2] = {
  pergunta: "3- Quantas vogais a palavra 'Brinquedo' possui?",
  opcoes: ["4", "3", "5", "6"],
  resposta: "4" 
}
perguntasPortugues[3] = {
  pergunta: "4- Separando em sílabas a palavra 'Professora', tem-se?",
  opcoes: ["Pro-fe-sso-ra", "Pro-fe-ss-ora", "Prof-es-so-ra", "Pro-fes-so-ra"],
  resposta: "Pro-fes-so-ra"
}
perguntasPortugues[4] = {
  pergunta: "5- Qual dessas palavras está escrita de forma errada?",
  opcoes: ["Girassol", "Conputador", "Chinelo", "Avestruz"],
  resposta: "Conputador"
}
perguntasHistGeo[0] = {
  pergunta: "1- A maior parte da Floresta Tropical está localizada em que estado?",
  opcoes: ["Amazonas", "Rio Grande do Norte", "Minas Gerais", "Bahia"],
  resposta: "Amazonas"
}
perguntasHistGeo[1] = {
  pergunta: "2- Qual a capital do Brasil?",
  opcoes: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
  resposta: "Brasília"
}
perguntasHistGeo[2] = {
  pergunta: "3- Quem assinou a lei de libertação dos escravos no Brasil (Lei Áurea)?",
  opcoes: ["Princesa Diana", "Tiradentes", "Lampião", "Princesa Isabel"],
  resposta: "Princesa Isabel"
}
perguntasHistGeo[3] = {
  pergunta: "4- O que Dom Pedro I gritou as margens do rio Ipiranga?",
  opcoes: ["Ordem e progresso", "Pátria Amada Brasil", "Independência ou morte", "Independência já"],
  resposta: "Independência ou morte"
}
perguntasHistGeo[4] = {
  pergunta: "5- Quem já estava aqui no Brasil quando os portugueses chegaram em 1500?",
  opcoes: ["Os Vikings", "Os Indígenas", "Os Astecas", "Não havia ningúem"],
  resposta: "Os Indígenas"
}
perguntasCiencias[0] = {
  pergunta: "1- Como se chama o movimento que a Terra faz em torno de si mesma?",
  opcoes: ["Translação", "Inspiração", "Rotação", "Expiração"],
  resposta: "Rotação"
}
perguntasCiencias[1] = {
  pergunta: "2- Os animais que se alimentam apenas de carne são classificados como",
  opcoes: ["Onívoros", "Carnívoros", "Herbívoros", "Vegetarianos"],
  resposta: "Carnívoros"
}
perguntasCiencias[2] = {
  pergunta: "3- As plantas produzem seu próprio alimento. Qual o nome desse processo?",
  opcoes: ["Ebulição", "Evolução", "Fissão", "Fotossíntese"],
  resposta: "Fotossíntese"
}
perguntasCiencias[3] = {
  pergunta: "4- Quais destes animais são ovíparos (botam ovos)?",
  opcoes: ["Cobra e Aranha", "Golfinho e Sapo", "Macaco e Galinha", "Tartaruga e Onça"],
  resposta: "Cobra e Aranha"
}
perguntasCiencias[4] = {
  pergunta: "5- Qual das alternativas NÃO corresponde aos sentidos do corpo humano?",
  opcoes: ["Visão e Audição", "Olfato e Paladar", "Tato e Olfato", "Visão e Pensamento"],
  resposta: "Visão e Pensamento"
}
perguntasGerais[0] = {
  pergunta: "1- Qual o idioma mais falado no mundo atualmente?",
  opcoes: ["Português", "Inglês", "Espanhol", "Mandarim"],
  resposta: "Inglês"
}
perguntasGerais[1] = {
  pergunta: "2- Qual personagem do Folclore Brasileiro tem os pés virados para trás?",
  opcoes: ["Saci-pererê", "Cuca", "Mula sem cabeça", "Curupira"],
  resposta: "Curupira"
}
perguntasGerais[2] = {
  pergunta: "3- Que nome se dá ao processo de reaproveitamento do lixo?",
  opcoes: ["Restauração", "Fusão", "Racionamento", "Reciclagem"],
  resposta: "Reciclagem"
}
perguntasGerais[3] = {
  pergunta: "4- Qual fruto é a matéria prima do chocolate?",
  opcoes: ["Abacate", "Kiwi", "Cacau", "Abóbora"],
  resposta: "Cacau"
}
perguntasGerais[4] = {
  pergunta: "5- Qual desses pintores é brasileiro?",
  opcoes: ["Candido Portinari", "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
  resposta: "Candido Portinari"
}
let mensagemParabens;
let perguntasTema;
if (temaEscolhido == "temaPeter"){
  perguntasTema = perguntasPortugues
  mensagemParabens = "Português"
} else if (temaEscolhido == "temaAlice"){
  perguntasTema = perguntasHistGeo
  mensagemParabens = "História e Geografia"
} else if (temaEscolhido == "temaAladin"){
  perguntasTema = perguntasCiencias
  mensagemParabens = "Ciências"
} else {
  perguntasTema = perguntasGerais;
  mensagemParabens = "Conhecimentos Gerais"
}

let contPergunta = 0;
let contOpcoes = 0;
const botaoProxima = document.querySelector('[data-botao-proxima]')
let respostas = document.querySelectorAll('.resposta')

respostas.forEach(atribuiOpcoes)
let perguntaTema = document.querySelector('[data-question]')
perguntaTema.value = perguntasTema[contPergunta].pergunta.toUpperCase()

const botaoOpcoes = ['[data-opcao-A]', '[data-opcao-B]', '[data-opcao-C]', '[data-opcao-D]']
for (var i=0; i < botaoOpcoes.length; i++){
  let opcaoEscolhida = document.querySelector(botaoOpcoes[i])
  opcaoEscolhida.addEventListener('click', (evento) => {
    let respostaUsuário = evento.target.value;
    if (respostaUsuário == perguntasTema[contPergunta].resposta){
      const opcoesDesativadas = document.querySelectorAll(".resposta")
      opcoesDesativadas.forEach(function(opcao){
        opcao.classList.add("desativaBotoes")
      })
      opcaoEscolhida.classList.add("respostaCerta")
      botaoProxima.disabled = false;
      contPergunta++
    } else {
      opcaoEscolhida.classList.add("respostaErrada")
    }
  })
}
botaoProxima.addEventListener('click', (evento) => {
  evento.preventDefault()
  contOpcoes = 0;
  if (contPergunta === perguntasTema.length){
    window.location.href = "../Pages/congrats.html"
    localStorage.setItem("temaMensagem", mensagemParabens)
    return;
  }
  perguntaTema.value = perguntasTema[contPergunta].pergunta.toUpperCase()
  respostas.forEach(atribuiOpcoes)
  const opcoesDesativadas = document.querySelectorAll(".resposta")
  opcoesDesativadas.forEach(function(opcao){
    opcao.classList.remove("desativaBotoes")
    })
  botaoProxima.disabled = true;
})

function atribuiOpcoes(opcao) {
  opcao.classList.remove("respostaCerta")
  opcao.classList.remove("respostaErrada")
  opcao.value = perguntasTema[contPergunta].opcoes[contOpcoes]
  contOpcoes++;
}
