import { enablePlay } from './enable-play.js'

export function getSelectedTheme(theme) {
  const themeButtons = document.querySelectorAll('[data-button]')
  themeButtons.forEach((themeButton) => {
    themeButton.addEventListener('click', (event) => {
      event.preventDefault()
      enablePlay()
      theme.chosenTheme = event.target.id
      theme.colorOption = event.target.name
      theme.messageTheme = event.target.dataset.button
    })
  })
}