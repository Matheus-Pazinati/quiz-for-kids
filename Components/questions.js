const temaEscolhido = localStorage.getItem("temaFundo")
const corOpcoes = localStorage.getItem("temaOpcoes")
const imagemTema = document.querySelector('[data-opcoes]')
imagemTema.classList.add(temaEscolhido)
const opcoesResposta = document.querySelectorAll('.resposta')
opcoesResposta.forEach(function(opcao){
  opcao.classList.add(corOpcoes)
})



