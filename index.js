import { getSelectedTheme } from "./Components/choose-theme.js"
import { playTheGame } from "./Components/play-game.js"

const themeData = {}
getSelectedTheme(themeData)
playTheGame(themeData)