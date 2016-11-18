import React from 'react';

const Scoreboard = (stats) => {
  console.log(stats)
  return (
    <section className="scoreboard">
      <h3 className="correct stats">
        Right: {stats.right}
      </h3>
      <h3 className="wrong stats">
        Wrong: {stats.wrong}
      </h3>
    </section>
  )
}

export default Scoreboard;
