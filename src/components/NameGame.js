import React, { Component } from 'react';
import Person from '../containers/Person';
import GuessMessage from './GuessMessage';
import Scoreboard from './Scoreboard';

export default class NameGame extends Component {

  componentWillMount() {
    this.props.setupRound(this.props.willowTreePeople, 5)
  }

  displayChoices() {
    return this.props.currentRoundChoices.map((person, index) => <Person key={index} {...person} />)
  }

  render() {
    const { currentRoundChoices, currentRoundAnswer, gameStats, lastGuess, gameMode} = this.props
    return(

      <section className="name-game">

        <Scoreboard stats={gameStats} changeMode={this.props.changeGameMode} willowTreePeople={this.props.willowTreePeople} mode={gameMode}/>

          { gameMode !=='reverse' ?
            <h1 className="main-prompt">Who is ${currentRoundAnswer.name}?</h1>
            :
            <section className="reverse-mode-game">
              <h1 className="main-prompt">Who is this?</h1>
              <img src={currentRoundAnswer.url}
                    className="reverse-mode-image"/>
            </section> }

        <section className="choice-container">
          { currentRoundChoices ? this.displayChoices() : null}
        </section>

        { lastGuess ? <GuessMessage lastGuess={lastGuess} answer={currentRoundAnswer} /> : <h2 className="guess-message">Match the name to the face.</h2> }

      </section>
    )
  }
}
