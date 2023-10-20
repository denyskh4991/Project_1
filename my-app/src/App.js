import React, { useState } from 'react';
import SmileyList from './SmileyList';
import './App.css';

function App() {
    const initialSmileys = [
        { id: 1, text: '😄', vote: 0 },
        { id: 2, text: '😍', vote: 0 },
        { id: 3, text: '👍', vote: 0 },
    ];

    const [smileys, setSmileys] = useState(initialSmileys);
    const [showResults, setShowResults] = useState(false);

    const handleVote = (index) => {
        setSmileys((prevSmileys) => {
            const newSmileys = [...prevSmileys];
            newSmileys[index] = { ...newSmileys[index], vote: newSmileys[index].vote + 1 };
            return newSmileys;
        });
    };

    const getWinner = () => {
        const maxVotes = Math.max(...smileys.map((smiley) => smiley.vote));
        return smileys.find((smiley) => smiley.vote === maxVotes);
    };

    return (
        <div>
            <h1>Vote for Your Favorite Smiley</h1>
            <SmileyList smileys={smileys} onVote={handleVote} />
            <button onClick={() => setShowResults(true)}>Show Results</button>
            {showResults && (
                <div>
                    <h2>Results</h2>
                    {getWinner() && (
                        <p>
                            The winner is: <span role="img" aria-label="winner">{getWinner().text}</span>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;