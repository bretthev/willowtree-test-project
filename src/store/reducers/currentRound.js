const currentRoundChoices = ( state = [], action ) => {
  switch(action.type) {
    case 'SET_ROUND':
      return action.currentRoundChoices
    default: return state;
  };
};

const currentRoundAnswer = ( state = {}, action ) => {
  switch(action.type) {
    case 'SET_ROUND':
      return action.answer
    default: return state;
  }
}

const lastGuess = ( state = {}, action ) => {
  switch(action.type) {
    case 'UPDATE_SCORE':
      return action.name
    case 'SET_ROUND':
      return null
    default: return state
  }
}


module.exports = { currentRoundChoices, currentRoundAnswer, lastGuess }
