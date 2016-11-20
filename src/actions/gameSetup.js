import { shuffle } from 'lodash';

//helper functions
const getRandomFromArray = (array, numberOfItems) => {
  return shuffle(array).slice(0, numberOfItems)
}


//actions
const setCurrentRoundChoices = (willowTreePeople, numberOfItems) => {
  const currentRoundChoices = getRandomFromArray(willowTreePeople, numberOfItems)
  console.log(willowTreePeople, currentRoundChoices)
  return (dispatch) => {
    dispatch({
      type: 'SET_ROUND',
      currentRoundChoices
    })
  }
}


const setAnswer = (currentRoundArray) => {
  const currentRoundAnswer = getRandomFromArray(currentRoundArray, 1)
  return (dispatch) => {
    dispatch({
      type: 'SET_ANSWER',
      currentRoundAnswer
    })
  }
}

module.exports = { setCurrentRoundChoices, setAnswer }
