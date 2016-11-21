import React from 'react';
import ReverseModePerson from './ReverseModePerson';
import ClassicPerson from './ClassicPerson';

const Person = (props) => {
  const mode = props.gameMode;

  return(
    mode !== 'reverse' ?
      <ClassicPerson {...props}/>
      :
      <ReverseModePerson {...props}/>
  )
}

export default Person;
