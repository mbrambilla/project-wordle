import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleMakeGuess(guessInput) {
    const nextList = [...guessList, {
      id: crypto.randomUUID(),
      value: guessInput
    }]
    setGuessList(nextList);
  }

  return (
    <>
      <GuessResults results={guessList} />
      <GuessInput handleMakeGuess={handleMakeGuess} />
    </>
  );
}

export default Game;
