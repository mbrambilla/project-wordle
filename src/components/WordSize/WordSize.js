import React from 'react';

function WordSize({ wordSize, changeWordSize }) {
  function handleSubmit(event) {
    event.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wordlen">Word length:</label>
      {' '}
      <select id="wordlen" value={wordSize} onChange={event => changeWordSize(parseInt(event.target.value, 10))}>
        <option
          value="4"
        >
          4
        </option>
        <option
          value="5"
        >
          5
        </option>
      </select>
    </form >
  );
}

export default WordSize;
