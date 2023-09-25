import React from 'react';

import { sample } from '../../utils';
import { WORDS_4, WORDS_5 } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import WordSize from '../WordSize';

// Pick a random word on every pageload.
const defaultWordSize = 5;
const answerRandom = sample(defaultWordSize === 4 ? WORDS_4 : WORDS_5);

// To make debugging easier, we'll log the solution in the console.
console.info({ answerRandom });

function Game() {
  const [wordSize, setWordSize] = React.useState(defaultWordSize);
  const [answer, setAnswer] = React.useState(answerRandom);
  const [guessList, setGuessList] = React.useState([]);
  const [completed, setCompleted] = React.useState(null);

  function restart(newSize) {
    const newLen = typeof newSize !== 'undefined' ? newSize : wordSize;
    const newAnswer = sample(newLen === 4 ? WORDS_4 : WORDS_5);
    setAnswer(newAnswer);
    console.info({ newAnswer });
    setGuessList([]);
    setCompleted(null);
  }

  function changeWordSize(size) {
    setWordSize(size);
    restart(size);
  }

  function handleMakeGuess(guessInput) {
    const nextList = [...guessList, guessInput];
    setGuessList(nextList);

    if (guessInput === answer) {
      setCompleted("win");
    }
    else if (nextList.length === NUM_OF_GUESSES_ALLOWED) {
      setCompleted("lose");
    }
  }

  return (
    <>
      <WordSize wordSize={wordSize} changeWordSize={changeWordSize} />
      <GuessResults wordSize={wordSize} guessList={guessList} answer={answer} />
      <GuessInput wordSize={wordSize} handleMakeGuess={handleMakeGuess} completed={completed} />
      {completed && <Banner completed={completed} answer={answer} count={guessList.length} restart={restart} />}
    </>
  );
}

export default Game;
