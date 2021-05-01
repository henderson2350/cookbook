const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();

    if (comment) {
        const response = await fetch('/api/comment/new', {
            method: 'POST',
            body: JSON.stringify({ comment,}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
            alert('New comment created.');
        } else {
            console.log(response.statusText);
            alert('Commenting error.');
        }
    }
};

document
.querySelector('.new-comment-form')
.addEventListener('submit', newCommentHandler);

