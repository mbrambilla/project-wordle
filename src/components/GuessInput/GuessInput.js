import React from 'react';
import { NUM_WORD_LENGTH } from '../../constants';

function GuessInput({ handleMakeGuess }) {
  const [guessInput, setGuessInput] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    handleMakeGuess(guessInput);
    setGuessInput('');
  }

  function handleOnChange(value) {
    value = value.trim().toUpperCase();
    const regex = new RegExp("[A-Z]{" + NUM_WORD_LENGTH + "}");
    const isValid = value.length > 0 && regex.test(value);
    setIsValid(isValid);
    setGuessInput(value);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[A-Z]{5}"
        minLength={NUM_WORD_LENGTH}
        maxLength={NUM_WORD_LENGTH}
        className={!isValid ? "is-invalid" : undefined}
        value={guessInput}
        aria-describedby={!isValid ? "guess-input-feedback" : undefined}
        onChange={event => handleOnChange(event.target.value)}
      />
      {!isValid && <div id="guess-input-feedback" className="invalid-feedback">Must be {NUM_WORD_LENGTH} characters in length and consist of the letters A-Z</div>}
    </form>
  );
}

export default GuessInput;
