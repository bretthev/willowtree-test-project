import React, { Component } from 'react';
import NameGame from '../containers/NameGame';

export default class App extends Component {

  render() {
    const {willowTreePeople} = this.props
    return (
      <div className="App">
        <div className="App-header">
          { willowTreePeople.length > 0 ? <NameGame/> : 'Loading WillowTree Name Game'}
        </div>
      </div>
    );
  }
}
