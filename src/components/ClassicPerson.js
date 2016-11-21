import React from 'react';

const ClassicPerson = (props) => {
  const mode = props.gameMode;
  return(
    <article
      className="classic-person"
      onClick={e => props.checkGuess(props.name, props.currentRoundAnswer, props.gameStats, props.willowTreePeople)}>
      <img
        src={props.url}
        className="choice-image"
      />
    </article>
  )
}

export default ClassicPerson;
