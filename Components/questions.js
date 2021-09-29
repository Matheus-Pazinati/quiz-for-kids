const temaEscolhido = localStorage.getItem("temaFundo")
const imagemTema = document.querySelector('[data-opcoes]')
imagemTema.classList.add(temaEscolhido)

