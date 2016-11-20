import NameGame from '../components/NameGame';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setupRound } from '../actions/gameSetup';
import { checkGuess } from '../actions/gameActions';

const mapStateToProps = (state) => {
  const { willowTreePeople, currentRoundChoices, currentRoundAnswer, gameStats } = state;
  return {
    willowTreePeople,
    currentRoundChoices,
    currentRoundAnswer,
    gameStats
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ setupRound, checkGuess }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(NameGame);
