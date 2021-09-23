function HabilitaJogar(){
  const botaoJogar = document.querySelector("[data-botao-jogar]")
  botaoJogar.disabled = false;
  }

const listaTemas = ["[data-botao-peter]", "[data-botao-alice]", "[data-botao-aladin]", "[data-botao-pinoquio]"]
for (var i=0; i < listaTemas.length; i++){
  const botaoTema = document.querySelector(listaTemas[i]);
  console.log(botaoTema)
  botaoTema.addEventListener("click", HabilitaJogar)
}


