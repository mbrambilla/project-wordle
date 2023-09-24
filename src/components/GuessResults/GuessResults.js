import React from 'react';

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map(({ id, value }) =>
        <p key={id} className="guess">{value}</p>
      )}
    </div>
  );
}

export default GuessResults;
