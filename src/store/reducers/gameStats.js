const initialState = { right: -1, wrong: 0}

const gameStats = ( state = initialState, action ) => {
  switch(action.type) {
    case 'UPDATE_SCORE':
      return Object.assign({}, state, action.newScore)
    case 'CHECK_GUESS':
      return state
    case 'SET_ROUND':
      return Object.assign({}, state, ++state.right)
    default: return state;
  };
}

export default gameStats;
