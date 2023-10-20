import React from 'react';

function Smiley({ name, image, vote, onVote }) {
    return (
        <div className="smiley">
            <img src={image} alt={name} />
            <p>{name}</p>
            <button onClick={onVote}>Голосувати</button>
            <span>{vote} голосів</span>
        </div>
    );
}

export default Smiley;