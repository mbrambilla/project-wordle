import React from 'react';
import { range } from '../../utils';
import { NUM_WORD_LENGTH } from '../../constants';

function Guess({ guessItem }) {

  return (
    <p className="guess">
      {range(NUM_WORD_LENGTH).map((index) => (
        <span key={index} className="cell">{guessItem ? guessItem[index] : undefined}</span>
      ))}
    </p>
  );
}

export default Guess;
