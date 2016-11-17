import React, { Component } from 'react';
import axios from 'axios';

export default class NameGame extends Component {
  constructor() {
    super()
    this.state = {
      willowTreePeople: []
    }
  }

  getWillowTreePeople() {
    axios.get('http://api.namegame.willowtreemobile.com/')
    .then((response)=> {
      this.setState({ willowTreePeople: response.data })
    })
    .catch(()=> {
      console.log('error')
    })
  }

  componentWillMount() {
    this.getWillowTreePeople()
  }

  displayNames() {
    return this.state.willowTreePeople.map((person, index) => <li key={index}>{person.name}</li>)
  }

  render() {
    return(
      <section className="name-game">
        <h1>{ this.state.willowTreePeople ? this.displayNames() : null}</h1>
        <ul>
        </ul>
      </section>
    )
  }
}
