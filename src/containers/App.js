import App from '../components/App';
import { connect } from 'react-redux';
import getWillowTreePeople from '../actions/willowTreePeople';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  const { willowTreePeople } = state;
  return {
    willowTreePeople
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getWillowTreePeople,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
