import { shuffle } from 'lodash';
import { setupRound } from './gameSetup';

const updateScore = (gameStats, rightOrWrong) => {
  const newScore = ++gameStats[rightOrWrong]
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_SCORE',
      newScore
    })
  }
}

const checkGuess = (name, answerPerson, stats, willowTreePeople) => {
  if (name === answerPerson.name) { return setupRound(willowTreePeople, 5) }
  else { return updateScore(stats, 'wrong') }
  return (dispatch) => {
    dispatch({
      type: 'CHECK_GUESS'
    })
  }
}



module.exports = { updateScore, checkGuess }
