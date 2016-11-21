import React from 'react';

const Header = (props) => {
  const isClassicButtonDisabled = props.mode==='classic';
  const isReverseButtonDisabled = props.mode==='reverse';
  return (
    <section className="header">
      <section className="scoreboard">
        <h3 className="correct stats">
          Right: {props.stats.right}
        </h3>
        <h3 className="wrong stats">
          Wrong: {props.stats.wrong}
        </h3>
      </section>

      <section className="button-container">
        <button className='mode-button' onClick={e => props.changeMode('reverse', props.willowTreePeople)} disabled={isReverseButtonDisabled}>Reverse Mode</button>
        <button className='mode-button' onClick={e => props.changeMode('classic', props.willowTreePeople)} disabled={isClassicButtonDisabled}>Classic Mode</button>
      </section>
    </section>
  )
}

export default Header;
