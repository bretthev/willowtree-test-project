import React from 'react';
import { shuffle } from 'lodash';

const GuessMessage = (props) => {
  const wrongName = props.lastGuess;
  const wrongMessages = [`Sorry, that's ${wrongName}.`, `Not quite, that's ${wrongName}.`, `Wrong, that's ${wrongName}.`, `Nope, that's ${wrongName}.`]
  const correctMessages = [`Woooo!`, `Nice job!`, `Nailed it!`, `You got it!`]

  return(

    props.lastGuess !== props.answer ?
      <h2 className="wrong guess-message">{ shuffle(wrongMessages)[0]}</h2>
    :
      <h2 className="correct guess-message">{ shuffle(correctMessages)[0]}</h2>
  )
}

export default GuessMessage
