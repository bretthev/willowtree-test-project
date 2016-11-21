import NameGame from '../components/NameGame';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setupRound } from '../actions/gameSetup';
import { changeGameMode } from '../actions/gameModes';

const mapStateToProps = (state) => {
  const { willowTreePeople, currentRoundChoices, currentRoundAnswer, gameStats, lastGuess, gameMode } = state;
  return {
    willowTreePeople,
    currentRoundChoices,
    currentRoundAnswer,
    gameStats,
    lastGuess,
    gameMode
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ setupRound, changeGameMode }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(NameGame);
