import React, { Component } from 'react';
import axios from 'axios';
import { shuffle } from 'lodash';
import Picture from './Picture';

export default class NameGame extends Component {
  constructor() {
    super()
    this.state = {
      willowTreePeople: [],
      currentGameRound: [],
      nextGameRound: [],
      answerPerson: {},
      lastGuess: null
    }
  }

  componentWillMount() {
    this.getWillowTreePeople();
  }

  getRandomFromArray(array, numberOfItems) {
    let newArray = shuffle(array)
    return newArray.slice(0, numberOfItems)
  }

  getWillowTreePeople() {
    axios.get('http://api.namegame.willowtreemobile.com/')
    .then((response)=> {
      this.setState({ willowTreePeople: response.data })
      this.setupGame()
    })
    .catch(()=> {
      console.log('error')
    })
  }

  setupGame() {
    this.setState({ currentRoundPeople: this.getRandomFromArray(this.state.willowTreePeople, 5),
                    nextRoundPeople: this.getRandomFromArray(this.state.willowTreePeople, 5),
                    lastGuess: null })
    this.setAnswer(this.state.currentRoundPeople)
                  }

  resetGame() {
    const {currentRoundPeople, nextRoundPeople} = this.state;
    this.setState({ currentRoundPeople: nextRoundPeople,
                    nextRoundPeople: this.getRandomFromArray(this.state.willowTreePeople, 5) })
    this.setAnswer(this.state.nextRoundPeople)
  }

  setAnswer(array) {
    this.setState({ answerPerson: this.getRandomFromArray(array, 1)[0] })
  }



  checkGuess(name) {
    if (name === this.state.answerPerson.name) { this.resetGame() }
    else { this.setState({ lastGuess: 'Wrong' })}
  }

  displayPictures() {
    return this.state.currentRoundPeople.map((person, index) => <Picture key={index} checkGuess={(name)=>this.checkGuess(name)} {...person} />)
  }

  render() {
    const { answerPerson, currentRoundPeople, lastGuess } = this.state;

    return(

      <section className="name-game">

        <h2> { answerPerson ? answerPerson.name : null } </h2>

        <section className="picture-container">
          { currentRoundPeople ? this.displayPictures() : null }
        </section>

        <h2> { lastGuess ? lastGuess : null} </h2>

      </section>
    )
  }
}
