import { combineReducers } from 'redux';
import gameMode from './gameMode';
import gameStats from './gameStats';
import willowTreePeople from './willowTreePeople';
import { currentRoundAnswer, currentRoundChoices, lastGuess } from './currentRound';

const reducer = combineReducers ({
  gameMode,
  gameStats,
  willowTreePeople,
  currentRoundAnswer,
  currentRoundChoices,
  lastGuess
})

export default reducer;
