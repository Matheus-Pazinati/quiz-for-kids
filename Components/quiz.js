import { setThemeImageAndOptionsColor } from '../Components/theme-image-color.js'
import { getQuizDataBase } from '../Components/get-quiz-db.js'

let themeChoosen = JSON.parse(localStorage.getItem('themeData')) 
const buttonNextQuestion = document.querySelector('[data-button-next]')
let questionCounter = 0

async function setQuestionAndOptions() {
  const themeQuiz = await getQuizDataBase(themeChoosen)
  const quizQuestion = document.querySelector('[data-question]')
  const quizOptions = document.querySelectorAll('[data-option]')
  quizQuestion.value = themeQuiz[questionCounter].question.toUpperCase()
  quizOptions.forEach((option, i) => {
    option.classList.remove('answers__correct', 'answers__wrong', 'answers__disable');
    option.value = themeQuiz[questionCounter].options[i]
    option.addEventListener('click', (e) => {
      let userChoice = e.target.value
      if (userChoice == themeQuiz[questionCounter].answer) {
        quizOptions.forEach((options) => {
          options.classList.add('answers__disable')
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

function nextQuestion(event) {
  event.preventDefault()
  if (questionCounter === 5) {
    window.location.href = "../Pages/congrats.html"
    return
  }
  buttonNextQuestion.disabled = true;
  setQuestionAndOptions()
}

buttonNextQuestion.addEventListener('click', nextQuestion)

setThemeImageAndOptionsColor(themeChoosen)
setQuestionAndOptions()