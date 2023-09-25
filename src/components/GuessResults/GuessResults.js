import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';
import { range } from '../../utils';

function GuessResults({ wordSize, guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} wordSize={wordSize} guessItem={guessList[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
