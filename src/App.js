import React, { Component } from 'react';
import NameGame from './NameGame';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NameGame/>
        </div>
      </div>
    );
  }
}
