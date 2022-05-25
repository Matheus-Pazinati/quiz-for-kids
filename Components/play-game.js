export function playTheGame(themeChoosen) {
  const buttonPlay = document.querySelector('[data-button-play]')
  buttonPlay.addEventListener('click', (event) => {
    event.preventDefault()
    localStorage.setItem('themeData', JSON.stringify(themeChoosen))
    window.location.href = "./Pages/quiz.html"
  })
}