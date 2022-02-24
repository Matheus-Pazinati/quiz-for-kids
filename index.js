import { habilitaJogar } from "./Components/enablePlay.js";

const listaTemas = ["[data-botao-peter]", "[data-botao-alice]", "[data-botao-aladin]", "[data-botao-pinoquio]"]
  let botaoEscolhido;
  let temaOpcao;

  function defineTema(evento){ //Define a imagem de fundo e as cores dependendo do botão clicado
    evento.preventDefault()
    botaoEscolhido = evento.target.id
    temaOpcao = evento.target.name
  }

  listaTemas.forEach((tema) => {
    const botaoTema = document.querySelector(tema)
    botaoTema.addEventListener('click', (event) => {
      habilitaJogar();
      defineTema(event);
    })
  })

  const botaoJogar = document.querySelector("[data-botao-jogar]")
  botaoJogar.addEventListener('click', (evento) => { //Transfere para a outra página as informações de fundo e cores
    evento.preventDefault()
    localStorage.setItem("temaFundo", botaoEscolhido)
    localStorage.setItem("temaOpcoes", temaOpcao)
    window.location.href = "./Pages/quiz.html"
  })