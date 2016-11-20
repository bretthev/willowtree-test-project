import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';


const middleware = [ thunk ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;


export default createStore(reducer, {}, composeEnhancers(applyMiddleware(...middleware)))
