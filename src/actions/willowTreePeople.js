import axios from 'axios';

const getWillowTreePeople = () => {
  return (dispatch) => {
    axios.get('http://api.namegame.willowtreemobile.com/')
    .then((response)=> {
        dispatch({
          type: 'GET_WILLOWTREE_PEOPLE',
          response
        })
    })
  }
}


export default getWillowTreePeople;
