const voteCounts = [0, 0, 0, 0, 0];

function updateResults() {
    for (let i = 0; i < voteCounts.length; i++) {
        const voteCount = voteCounts[i];
        const voteCountElement = document.getElementById(`votes${i}`);
        voteCountElement.textContent = voteCount;
    }
}

function vote(index) {
    voteCounts[index]++;
    updateResults();
}

updateResults();