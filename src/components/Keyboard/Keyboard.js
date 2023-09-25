import React from 'react';

const keylayout = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

function letterStatus(guess) {
  let mapping = {};

  guess.forEach((word) => {
    word.forEach(({ letter, status }) => {
      mapping[letter] = status;
    });
  });

  return mapping;
}

function Keyboard({ guessCheckList }) {
  const letterState = letterStatus(guessCheckList);

  return (
    <div className="keyboard">
      {keylayout.map((row, index) => (
        <div className="keyrow" key={index}>
          {row.map((letter) => (
            <span className={'key ' + letterState[letter]} key={letter}>{letter}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
