import React from 'react';
import { shuffle } from 'lodash';

const GuessMessage = (props) => {
  const wrongName = props.lastGuess;
  const wrongMessages = [`Sorry, that's ${wrongName}.`, `Not quite, that's ${wrongName}.`, `Wrong, that's ${wrongName}.`, `Nope, that's ${wrongName}.`]

  return (
    props.lastGuess ?
      <h2 className="wrong guess-message">{ shuffle(wrongMessages)[0]}</h2>
    :
      null
  )
}

export default GuessMessage
