import React from 'react';

const Scoreboard = (gameStats) => {
  return (
    <section className="scoreboard">
      <h3 className="correct stats">
        Right: {gameStats.right}
      </h3>
      <h3 className="wrong stats">
        Wrong: {gameStats.wrong}
      </h3>
    </section>
  )
}

export default Scoreboard;
