import { habilitaJogar } from "./enablePlay.js";

const listaTemas = ["[data-botao-peter]", "[data-botao-alice]", "[data-botao-aladin]", "[data-botao-pinoquio]"]
for (var i=0; i < listaTemas.length; i++){
  const botaoTema = document.querySelector(listaTemas[i]);
  botaoTema.addEventListener("click", habilitaJogar)
  }
// -- Inicio da definição do tema para a página de perguntas --
  let botaoEscolhido;
  function defineTema(evento){
    evento.preventDefault()
    botaoEscolhido = evento.target.id
  }
  
  for (var i=0; i < listaTemas.length; i++){
    const escolheTema = document.querySelector(listaTemas[i])
    escolheTema.addEventListener('click', defineTema)
  }

  const botaoJogar = document.querySelector("[data-botao-jogar]")
  botaoJogar.addEventListener('click', (evento) => {
    evento.preventDefault()
    localStorage.setItem("temaFundo", botaoEscolhido)
    window.location.href = "./quiz.html"
  })
 









