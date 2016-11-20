import React, { Component } from 'react';
import Person from '../containers/Person';
import GuessMessage from './GuessMessage';
import Scoreboard from './Scoreboard';

export default class NameGame extends Component {

  componentWillMount() {
    this.props.setupRound(this.props.willowTreePeople, 5)
  }

  displayPictures() {
    return this.props.currentRoundChoices.map((person, index) => <Person key={index} {...person} />)
  }

  render() {
    const { currentRoundChoices, currentRoundAnswer, gameStats, lastGuess} = this.props
    return(

      <section className="name-game">

        <Scoreboard {...gameStats}/>

        <h1 className="main-prompt">
          { currentRoundAnswer.name ? `Who is ${currentRoundAnswer.name}?` : 'Loading, please wait.' }
        </h1>

        <section className="picture-container">
          { currentRoundChoices ? this.displayPictures() : null}
        </section>

        { lastGuess ? <GuessMessage lastGuess={lastGuess} answer={currentRoundAnswer} /> : <h2 className="guess-message">Match the name to the face.</h2> }

      </section>
    )
  }
}
