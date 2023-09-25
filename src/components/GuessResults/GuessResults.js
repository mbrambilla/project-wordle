import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';
import { range } from '../../utils';

function GuessResults({ wordSize, guessCheckList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} wordSize={wordSize} guessCheck={guessCheckList[index]} />
      ))}
    </div>
  );
}

export default GuessResults;
