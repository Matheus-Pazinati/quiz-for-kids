import { getQuizDataBase } from '../Components/get-quiz-db.js'
import { setThemeImageAndOptionsColor } from '../Components/theme-image-color.js'

let themeChoosen = JSON.parse(localStorage.getItem('themeData')) 
let questionCounter = 0
const buttonNextQuestion = document.querySelector('[data-button-next]')

async function setQuestionAndOptions(counter) {
  const theme = await getQuizDataBase(themeChoosen)
  const quizQuestion = document.querySelector('[data-question]')
  const quizOptions = document.querySelectorAll('[data-option]')
  quizQuestion.value = theme[counter].question.toUpperCase()
  quizOptions.forEach((option, i) => {
    option.classList.remove('answers__correct', 'answers__wrong');
    option.value = theme[counter].options[i]
    option.addEventListener('click', (e) => {
      let userChoice = e.target.value
      if (userChoice == theme[counter].answer) {
        quizOptions.forEach((option) => {
          option.classList.add('answers__disable')
        })
        option.classList.add('answers__correct')
        buttonNextQuestion.disabled = false;
        questionCounter++
      } else {
        option.classList.add('answers__wrong')
      }
    })
  })
}

setThemeImageAndOptionsColor(themeChoosen)
setQuestionAndOptions(questionCounter)