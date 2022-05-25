export async function getQuizDataBase(theme) {
  const quizList = await fetch(`https://my-json-server.typicode.com/MTHZ1/fake_db/${theme.chosenTheme}`);
  const quizData = await quizList.json()
  return quizData
}