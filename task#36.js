document.addEventListener('DOMContentLoaded', function() {
    const postIdInput = document.getElementById('postId');
    const searchForm = document.getElementById('searchForm');
    const postContainer = document.getElementById('postContainer');
    const postDetails = document.getElementById('postDetails');
    const getCommentsButton = document.getElementById('getCommentsButton');
    const comments = document.getElementById('comments');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const postId = postIdInput.value;

        if (postId >= 1 && postId <= 100) {
            comments.innerHTML = '';

            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
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
        } else {
            alert('Введіть ідентифікатор від 1 до 100');
        }
    });

    getCommentsButton.addEventListener('click', function() {
        const postId = postIdInput.value;
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
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