import React, { Component } from 'react';
import axios from 'axios';
import { shuffle } from 'lodash';
import Person from './Person';
import GuessMessage from './GuessMessage';
import Scoreboard from './Scoreboard';

export default class NameGame extends Component {
  // getRandomFromArray(array, numberOfItems) {
  //   let newArray = shuffle(array)
  //   return newArray.slice(0, numberOfItems)
  // }
  componentWillMount() {
    this.props.setCurrentRoundChoices(this.props.willowTreePeople, 5)
  }
  // getWillowTreePeople() {
  //   axios.get('http://api.namegame.willowtreemobile.com/')
  //   .then((response)=> {
  //     this.setState({ willowTreePeople: response.data })
  //     this.setupGame()
  //   })
  //   .catch(()=> {
  //     console.log('error')
  //   })
  // }

  // setupGame() {
  //   this.setState({ currentRoundPeople: this.getRandomFromArray(this.state.willowTreePeople, 5),
  //                   nextRoundPeople: this.getRandomFromArray(this.state.willowTreePeople, 5),
  //                   lastGuess: null })
  //   this.setAnswer(this.state.currentRoundPeople)
  //                 }
  //
  // resetGame() {
  //   const {currentRoundPeople, nextRoundPeople, stats } = this.state;
  //   this.setState({ currentRoundPeople: nextRoundPeople,
  //                   nextRoundPeople: this.getRandomFromArray(this.state.willowTreePeople, 5),
  //                   lastGuess: null,
  //                   stats: {right: ++stats.right, wrong: stats.wrong} })
  //   this.setAnswer(this.state.nextRoundPeople)
  // }

  // setAnswer(array) {
  //   this.setState({ answerPerson: this.getRandomFromArray(array, 1)[0] })
  // }

  // checkGuess(name) {
  //   const { stats } = this.state;
  //   if (name === this.state.answerPerson.name) { this.resetGame() }
  //   else { this.setState({  lastGuess: 'Wrong',
  //                           wrongPerson: name,
  //                           stats: {right: stats.right, wrong: ++stats.wrong}
  //                           }) }
  // }

  // displayPictures() {
  //   return this.state.currentRoundPeople.map((person, index) => <Person key={index} checkGuess={(name)=>this.checkGuess(name)} {...person} />)
  // }

  render() {
    const { answerPerson, currentRoundPeople, lastGuess, wrongPerson, stats } = this.props;
    return(

      <section className="name-game">

        <h1 className="main-prompt">
        </h1>

        <section className="picture-container">
        </section>


      </section>
    )
  }
}
