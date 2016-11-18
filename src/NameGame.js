import React, { Component } from 'react';
import axios from 'axios';
import { shuffle } from 'lodash';
import Picture from './Picture';

export default class NameGame extends Component {
  constructor() {
    super()
    this.state = {
      willowTreePeople: [],
      randomPeopleForGameRound: [],
      answerPerson: {},
      lastGuess: null
    }
  }

  componentWillMount() {
    this.getWillowTreePeople();
  }

  getRandomFromArray(array, number) {
    let newArray = shuffle(array)
    return newArray.slice(0, number)
  }

  getWillowTreePeople() {
    axios.get('http://api.namegame.willowtreemobile.com/')
    .then((response)=> {
      this.setState({ willowTreePeople: response.data })
      this.setRound(response.data)
    })
    .catch(()=> {
      console.log('error')
    })
  }

  setRound(peopleArray) {
    this.setState({ randomPeopleForGameRound: this.getRandomFromArray( peopleArray, 5 )})
    this.setState({ answerPerson: this.getRandomFromArray( this.state.randomPeopleForGameRound, 1 )[0] })
  }

  checkGuess(name) {
    if (name === this.state.answerPerson.name) { this.setState({ lastGuess: 'Correct' }) }
    else { this.setState({ lastGuess: 'Wrong' })}
  }

  displayPictures() {
    return this.state.randomPeopleForGameRound.map((person, index) => <Picture key={index} checkGuess={(name)=>this.checkGuess(name)} {...person} />)
  }

  render() {
    console.log(this.state.lastGuess)
    const { answerPerson, randomPeopleForGameRound, lastGuess } = this.state;

    return(

      <section className="name-game">

        <h2> { answerPerson ? answerPerson.name : null } </h2>

        { randomPeopleForGameRound ? this.displayPictures() : null }

        <h2> { lastGuess ? lastGuess : null} </h2>

      </section>
    )
  }
}
