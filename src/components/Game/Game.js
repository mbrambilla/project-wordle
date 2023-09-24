import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState([]);

  function handleMakeGuess(value) {
    console.log("Guess:", value);
  }

  return (
    <>
      <p>Put a game here!</p>
      <GuessInput handleMakeGuess={handleMakeGuess} />
    </>
  );
}

export default Game;
