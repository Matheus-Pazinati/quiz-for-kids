import { setThemeImageAndOptionsColor } from '../Components/theme-image-color.js'
import { setQuestionAndOptions } from '../Components/theme-question-options.js'

let themeChoosen = JSON.parse(localStorage.getItem('themeData')) 
let questionCounter = 0

setThemeImageAndOptionsColor(themeChoosen)
setQuestionAndOptions(questionCounter, themeChoosen)