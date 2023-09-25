import React from 'react';
import { range } from '../../utils';
import { NUM_WORD_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Guess({ guessItem, answer }) {
  // Get guess letter status
  let guessCheck = null;
  if (typeof guessItem !== "undefined") {
    guessCheck = checkGuess(guessItem, answer);
  }

  console.log(guessCheck);

  return (
    <div className="guess">
      {range(NUM_WORD_LENGTH).map((index) => (
        <span key={index} className={`cell${guessCheck ? ' ' + guessCheck[index].status : ''}`}>
          {guessCheck ? guessCheck[index].letter : undefined}
        </span>
      ))
      }
      {''}
    </div>
  );
}

export default Guess;
