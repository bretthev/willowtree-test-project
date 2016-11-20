import { connect } from 'react-redux';
import Scoreboard from '../components/Scoreboard';

const mapStateToProps = (state) => {
  const { gameStats } = state;
  return {
    gameStats
  }
}


export default connect(mapStateToProps, null)(Scoreboard)
