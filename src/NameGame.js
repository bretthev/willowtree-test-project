import React, { Component } from 'react';
import axios from 'axios';
import { shuffle } from 'lodash';
import Person from './Person';
import GuessMessage from './GuessMessage';
import Scoreboard from './Scoreboard';

export default class NameGame extends Component {
  constructor() {
    super()
    this.state = {
      willowTreePeople: [],
      currentGameRound: [],
      nextGameRound: [],
      answerPerson: {},
      lastGuess: null,
      wrongPerson: null,
      stats: { right: 0, wrong: 0 }
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
    const {currentRoundPeople, nextRoundPeople, stats } = this.state;
    this.setState({ currentRoundPeople: nextRoundPeople,
                    nextRoundPeople: this.getRandomFromArray(this.state.willowTreePeople, 5),
                    lastGuess: null,
                    stats: {right: ++stats.right, wrong: stats.wrong} })
    this.setAnswer(this.state.nextRoundPeople)
  }

  setAnswer(array) {
    this.setState({ answerPerson: this.getRandomFromArray(array, 1)[0] })
  }

  checkGuess(name) {
    const { stats } = this.state;
    if (name === this.state.answerPerson.name) { this.resetGame() }
    else { this.setState({  lastGuess: 'Wrong',
                            wrongPerson: name,
                            stats: {right: stats.right, wrong: ++stats.wrong}
                            }) }
  }

  displayPictures() {
    return this.state.currentRoundPeople.map((person, index) => <Person key={index} checkGuess={(name)=>this.checkGuess(name)} {...person} />)
  }

  render() {
    const { answerPerson, currentRoundPeople, lastGuess, wrongPerson, stats } = this.state;
    console.log(this.state.stats)
    return(

      <section className="name-game">

        <h1 className="main-prompt">
          { answerPerson.name ? `Who is ${answerPerson.name}?` : 'Loading, please wait.' }
        </h1>

        <Scoreboard {...stats}/>

        <section className="picture-container">
          { currentRoundPeople ? this.displayPictures() : null }
        </section>

        { lastGuess ? <GuessMessage guessMessage={lastGuess} wrongName={wrongPerson}/> : <h2 className="guess-message">Click a picture to make your guess.</h2> }

      </section>
    )
  }
}
