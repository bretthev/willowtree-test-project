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

  displayPicture(i) {
    return <img src={this.state.willowTreePeople[i].url}/>
  }

  render() {
    return(
      <section className="name-game">
        { this.state.willowTreePeople.length > 0 ? this.displayPicture(Math.floor(Math.random()*this.state.willowTreePeople.length)) : null }
        <ul>
          { this.state.willowTreePeople ? this.displayNames() : null}
        </ul>
      </section>
    )
  }
}
