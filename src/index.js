import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './styles.css';
import { Provider } from 'react-redux';
import store from './store/store';
import getWillowTreePeople from './actions/willowTreePeople'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(getWillowTreePeople())
