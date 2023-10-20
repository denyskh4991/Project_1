import React from 'react';

function SmileyList({ smileys, onVote }) {
    return (
        <ul>
            {smileys.map((smiley, index) => (
                <li key={smiley.id}>
          <span role="img" aria-label="smiley">
            {smiley.text}
          </span>
                    <button onClick={() => onVote(index)}>Vote ({smiley.vote})</button>
                </li>
            ))}
        </ul>
    );
}

export default SmileyList;