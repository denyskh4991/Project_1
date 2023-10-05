document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const postContainer = document.getElementById('postContainer');
    const postDetails = document.getElementById('postDetails');
    const getCommentsButton = document.getElementById('getCommentsButton');
    const comments = document.getElementById('comments');
    let currentPostId;

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (this.checkValidity()) {
            currentPostId = this.elements.postId.value;

            // Очищення коментарів при новому запиті
            comments.innerHTML = '';

            fetch(`https://jsonplaceholder.typicode.com/posts/${currentPostId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Помилка при отриманні поста');
                    }
                    return response.json();
                })
                .then(data => {
                    postDetails.innerHTML = `
                        <h3>${data.title}</h3>
                        <p>${data.body}</p>
                    `;
                    postContainer.style.display = 'block';
                })
                .catch(error => {
                    console.error(error);
                    alert('Сталася помилка. Спробуйте ще раз.');
                });
        }
    });

    getCommentsButton.addEventListener('click', function() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${currentPostId}/comments`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Помилка при отриманні коментарів');
                }
                return response.json();
            })
            .then(data => {
                let commentsHTML = '';
                data.forEach(comment => {
                    commentsHTML += `
                        <div>
                            <h4>${comment.name}</h4>
                            <p>${comment.body}</p>
                        </div>
                    `;
                });
                comments.innerHTML = commentsHTML;
            })
            .catch(error => {
                console.error(error);
                alert('Сталася помилка при отриманні коментарів.');
            });
    });
});