import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ wordSize, guessItem, answer }) {
  // Get guess letter status
  let guessCheck = null;
  if (typeof guessItem !== "undefined") {
    guessCheck = checkGuess(guessItem, answer);
  }

  return (
    <div className="guess">
      {range(wordSize).map((index) => (
        <span key={index} className={`cell${guessCheck ? ' ' + guessCheck[index].status : ''}`}>
          {guessCheck ? guessCheck[index].letter : undefined}
        </span>
      ))
      }
    </div>
  );
}

export default Guess;
