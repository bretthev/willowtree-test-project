import { setupRound } from './gameSetup';

const updateScore = (gameStats, rightOrWrong, name) => {
  const newScore = ++gameStats[rightOrWrong]
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_SCORE',
      newScore,
      name
    })
  }
}

const checkGuess = (name, answerPerson, stats, willowTreePeople) => {
  if (name === answerPerson.name) { return setupRound(willowTreePeople, 5, name) }
  else { return updateScore(stats, 'wrong', name) }
}



module.exports = { checkGuess }
