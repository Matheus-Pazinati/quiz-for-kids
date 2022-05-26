import { getQuizDataBase } from '../Components/get-quiz-db.js'

export async function setQuestionAndOptions(counter, theme) {
  const themeQuiz = await getQuizDataBase(theme)
  const buttonNextQuestion = document.querySelector('[data-button-next]')
  const quizQuestion = document.querySelector('[data-question]')
  const quizOptions = document.querySelectorAll('[data-option]')
  quizQuestion.value = themeQuiz[counter].question.toUpperCase()
  quizOptions.forEach((option, i) => {
    option.classList.remove('answers__correct', 'answers__wrong', 'answers__disable');
    option.value = themeQuiz[counter].options[i]
    option.addEventListener('click', (e) => {
      let userChoice = e.target.value
      if (userChoice == themeQuiz[counter].answer) {
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