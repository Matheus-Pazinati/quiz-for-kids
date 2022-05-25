function setCongratsMessage(item) {
  const congratsTheme = JSON.parse(localStorage.getItem('themeData'))
  item.textContent = `Você completou o desafio de responder corretamente todas as perguntas sobre ${congratsTheme.messageTheme}. Agora você pode escolher outro tema, e se desafiar novamente, clicando no botão a baixo.`
}

let congratsMessage = document.querySelector('.congrats__message')
setCongratsMessage(congratsMessage)