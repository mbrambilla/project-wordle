import React from 'react';

function Banner({ completed, count, answer, restart }) {
  const bannerClass = completed === 'win' ? 'happy' : 'sad';

  return (
    <div className={`banner ${bannerClass}`}>
      {
        completed === 'win'
          ? <p><strong>Congratulations!</strong> Got it in <strong>{count} guesses</strong>.</p>
          : <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      }
      <p><button onClick={event => restart()}>Restart Game</button></p>
    </div >);
}

export default Banner;
