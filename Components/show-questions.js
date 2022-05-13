import { perguntasPortugues, perguntasCiencias, perguntasHistGeo, perguntasGerais } from "./questions.js"

const temaEscolhido = localStorage.getItem("temaFundo")
const corOpcoes = localStorage.getItem("temaOpcoes")
const imagemTema = document.querySelector('[data-opcoes]')

imagemTema.classList.add(temaEscolhido)
const opcoesResposta = document.querySelectorAll('.resposta')
opcoesResposta.forEach(function(opcao){
  opcao.classList.add(corOpcoes)
})

let mensagemParabens;
let perguntasTema;
if (temaEscolhido == "temaPortugues"){
  perguntasTema = perguntasPortugues
  mensagemParabens = "Português"
} else if (temaEscolhido == "temaHistGeo"){
  perguntasTema = perguntasHistGeo
  mensagemParabens = "História e Geografia"
} else if (temaEscolhido == "temaCiencias"){
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
      respostas.forEach(function(resposta){
        resposta.classList.add("desativaBotoes")
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