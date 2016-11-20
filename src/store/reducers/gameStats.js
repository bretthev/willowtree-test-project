const gameStats = ( state = {}, action ) => {
  switch(action.type) {
    case 'UPDATE_SCORE':
      return action.newScore
    case 'RESET_SCORE':
      return state
    default: return state;
  };
}

export default gameStats;
