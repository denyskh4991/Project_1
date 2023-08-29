const smileys = document.querySelectorAll('.smiley');
const voteCounts = new Array(smileys.length).fill(0);

const results = document.getElementById('results');

results.addEventListener('click', function(event) {
    if (event.target.classList.contains('smiley')) {
        const index = parseInt(event.target.getAttribute('data-index'));
        voteCounts[index]++;
        updateResults();
    }
});

function updateResults() {
    const voteElements = document.querySelectorAll('.votes');
    voteElements.forEach((element, index) => {
        element.textContent = voteCounts[index];
    });
}