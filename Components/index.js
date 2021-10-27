import { habilitaJogar } from "./enablePlay.js";

const listaTemas = ["[data-botao-peter]", "[data-botao-alice]", "[data-botao-aladin]", "[data-botao-pinoquio]"]
for (var i=0; i < listaTemas.length; i++){
  const botaoTema = document.querySelector(listaTemas[i]);
  botaoTema.addEventListener("click", habilitaJogar) //Quanto algum dos botoes forem clicados, habilite jogar
  }
// -- Inicio da definição do tema para a página de perguntas --
  let botaoEscolhido;
  let temaOpcao;
  function defineTema(evento){ //Define a imagem de fundo e as cores dependendo do botão clicado
    evento.preventDefault()
    botaoEscolhido = evento.target.id
    temaOpcao = evento.target.name
  }
  for (var i=0; i < listaTemas.length; i++){
    const escolheTema = document.querySelector(listaTemas[i])
    escolheTema.addEventListener('click', defineTema)
  }
  const botaoJogar = document.querySelector("[data-botao-jogar]")
  botaoJogar.addEventListener('click', (evento) => { //Transfere para a outra página as informações de fundo e cores
    evento.preventDefault()
    localStorage.setItem("temaFundo", botaoEscolhido)
    localStorage.setItem("temaOpcoes", temaOpcao)
    window.location.href = "../Pages/quiz.html"
  })