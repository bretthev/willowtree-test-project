import Person from '../components/Person';
import { checkGuess } from '../actions/gameActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { willowTreePeople, gameStats, currentRoundAnswer } = state;
  return {
    willowTreePeople,
    gameStats,
    currentRoundAnswer
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ checkGuess }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Person);
