import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { willowTreePeople } = state;
  return {
    willowTreePeople
  }
}



export default connect(mapStateToProps, null)(App)
