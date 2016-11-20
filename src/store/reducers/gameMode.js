const gameMode = ( state = {}, action ) => {
  switch(action.type) {
    case 'STANDARD_MODE':
      return action.mode
    case 'REVERSE_MODE':
      return action.mode
    default: return state;
  };
};

export default gameMode;
