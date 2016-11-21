const changeGameMode = (mode, willowTreePeople) => {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_GAME_MODE',
      mode
    })
  }
}

module.exports = { changeGameMode }
