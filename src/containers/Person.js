import Person from '../components/Person';
import { checkGuess } from '../actions/gameActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { willowTreePeople, gameStats, currentRoundAnswer, gameMode } = state;
  return {
    willowTreePeople,
    gameStats,
    currentRoundAnswer,
    gameMode
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ checkGuess }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Person);
