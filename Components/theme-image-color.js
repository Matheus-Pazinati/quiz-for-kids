export function setThemeImageAndOptionsColor(themeData) {
  const backgroundImage = document.querySelector('[data-container-options]')
  const quizOptions = document.querySelectorAll('[data-option]')
  backgroundImage.classList.add(themeData.chosenTheme)
  quizOptions.forEach((option) => {
    option.classList.add(themeData.colorOption)
  })
}