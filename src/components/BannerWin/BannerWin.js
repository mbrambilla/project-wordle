import React from 'react';
import Banner from '../Banner';

function BannerWin({ count, restart }) {
  return (
    <Banner variant="happy">
      <p><strong>Congratulations!</strong> Got it in <strong>{count === 1 ? '1 guess' : count + ' guesses'}</strong>.</p>
      <p><button onClick={event => restart()}>Restart Game</button></p>
    </Banner>
  );
}

export default BannerWin;
