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

module.exports = { currentRoundChoices, currentRoundAnswer }
