import React, { Component } from 'react';
import Person from '../containers/Person';
import GuessMessage from './GuessMessage';
import Header from './Header';
import { shuffle } from 'lodash';

export default class NameGame extends Component {

  componentWillMount() {
    this.props.setupRound(this.props.willowTreePeople, 5)
  }

  displayChoices() {
    return this.props.currentRoundChoices.map((person, index) => <Person key={index} {...person} />)
  }

  render() {
    const { currentRoundChoices, currentRoundAnswer, gameStats, lastGuess, gameMode, willowTreePeople} = this.props
    return(

      <section className="name-game">

        <Header stats={gameStats} changeMode={this.props.changeGameMode} willowTreePeople={willowTreePeople} mode={gameMode}/>

          { gameMode !=='reverse' && currentRoundAnswer.name ?
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


          <GuessMessage lastGuess={lastGuess} answer={currentRoundAnswer} />

      </section>
    )
  }
}

  // const name = currentRoundAnswer.name.replace(/[^A-Za-z ]/g, '')
