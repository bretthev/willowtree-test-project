import React from 'react';

const ReverseModePerson = (props) => {
  const mode = props.gameMode;

  return(
    <article
      className="reverse-choice"
      onClick={e => props.checkGuess(props.name, props.currentRoundAnswer, props.gameStats, props.willowTreePeople)}>
      <h2 className="reverse-name">
        {props.name}
      </h2>
    </article>
  )
}

export default ReverseModePerson;
