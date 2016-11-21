const gameMode = ( state = 'classic', action ) => {
  switch(action.type) {
    case 'CHANGE_GAME_MODE':
      return action.mode
    default: return state;
  };
};

export default gameMode;
