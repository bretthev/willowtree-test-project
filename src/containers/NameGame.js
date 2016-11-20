import NameGame from '../components/NameGame';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentRoundChoices, setAnswer } from '../actions/gameSetup'

const mapStateToProps = (state) => {
  const { willowTreePeople, currentRoundChoices, currentRoundAnswer } = state;
  return {
    willowTreePeople,
    currentRoundChoices,
    currentRoundAnswer
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ setCurrentRoundChoices, setAnswer }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(NameGame);
