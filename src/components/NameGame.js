import React, { Component } from 'react';
import Person from './Person';
// import GuessMessage from './GuessMessage';
import Scoreboard from './Scoreboard';

export default class NameGame extends Component {

  componentWillMount() {
    this.props.setupRound(this.props.willowTreePeople, 5)
  }

  displayPictures() {
    return this.props.currentRoundChoices.map((person, index) => <Person key={index} checkGuess={this.props.checkGuess} answer={this.props.currentRoundAnswer} people={this.props.willowTreePeople} stats={this.props.gameStats} {...person} />)
  }

  render() {
    const { currentRoundChoices, currentRoundAnswer, gameStats} = this.props
    return(

      <section className="name-game">

      <Scoreboard {...gameStats}/>

        <h1 className="main-prompt">
          {currentRoundAnswer ? currentRoundAnswer.name : null}
        </h1>

        <section className="picture-container">
          { currentRoundChoices ? this.displayPictures() : null}
        </section>


      </section>
    )
  }
}
