import NameGame from '../components/NameGame';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setupRound } from '../actions/gameSetup';

const mapStateToProps = (state) => {
  const { willowTreePeople, currentRoundChoices, currentRoundAnswer, gameStats, lastGuess } = state;
  return {
    willowTreePeople,
    currentRoundChoices,
    currentRoundAnswer,
    gameStats,
    lastGuess
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ setupRound }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(NameGame);
