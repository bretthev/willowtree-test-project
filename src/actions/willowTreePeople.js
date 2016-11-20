import axios from 'axios';

const getWillowTreePeople = () => {
  console.log('fired')
  return (dispatch) => {
    axios.get('http://api.namegame.willowtreemobile.com/')
    .then((response)=> {
        dispatch({
          type: 'GET_WILLOWTREE_PEOPLE',
          response
        })
    })
    // .catch(()=> {
    //   console.log('error')
    // })
  }
}


export default getWillowTreePeople;
