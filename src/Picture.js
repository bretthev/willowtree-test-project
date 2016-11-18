import React from 'react';

const Picture = (person) => {
  return(
    <img src={person.url} onClick={e => person.checkGuess(person.name)} />
  )
}

export default Picture;
