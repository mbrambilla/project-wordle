import React from 'react';
import { range } from '../../utils';

function Guess({ wordSize, guessCheck }) {
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
