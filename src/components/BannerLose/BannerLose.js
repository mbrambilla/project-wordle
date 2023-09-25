import React from 'react';
import Banner from '../Banner';

function BannerLose({ answer, restart }) {
  return (
    <Banner variant="sad">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      <p><button onClick={event => restart()}>Restart Game</button></p>
    </Banner>
  );
}

export default BannerLose;
