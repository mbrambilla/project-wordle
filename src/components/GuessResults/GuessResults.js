import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';
import { range } from '../../utils';

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} guessItem={guessList[index]} />
      ))}
    </div>
  );
}

export default GuessResults;
