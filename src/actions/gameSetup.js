import { shuffle } from 'lodash';

//helper functions
const getRandomFromArray = (array, numberOfItems) => {
  return shuffle(array).slice(0, numberOfItems)
}


//actions
const setupRound = (willowTreePeople, numberOfItems) => {
  const currentRoundChoices = getRandomFromArray(willowTreePeople, numberOfItems)
  const answer = getRandomFromArray(currentRoundChoices, 1)[0]
  return (dispatch) => {
    dispatch({
      type: 'SET_ROUND',
      currentRoundChoices,
      answer
    })
  }
}


module.exports = { setupRound }
