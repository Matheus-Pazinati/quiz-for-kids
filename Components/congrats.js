const temaParabens = localStorage.getItem("temaMensagem")
let mensagemParabens = document.querySelector('.mensagem')
mensagemParabens.textContent = `Você completou o desafio de responder corretamente todas as perguntas sobre ${temaParabens}. Agora você pode escolher outro tema, e se desafiar novamente, clicando no botão a baixo.`
const botaoMenu = document.querySelector('.botao-menu')
botaoMenu.addEventListener('click', (event) => {
  event.preventDefault()
  window.location.href = "../index.html"
})