const willowTreePeople = ( state = [], action ) => {
  switch(action.type) {
    case 'GET_WILLOWTREE_PEOPLE':
      return action.response.data
    default: return state;
  };
}

export default willowTreePeople;
