import React from 'react';

const Person = (person) => {
  return(
    <article className="person">
      <img
        src={person.url}
        onClick={e => person.checkGuess(person.name)}
        className="picture"
      />
    </article>
  )
}

export default Person;
