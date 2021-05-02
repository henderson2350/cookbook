const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    const id = event.target.getAttribute('data-id');

    if (comment) {
        const response = await fetch(`/api/comment/new/${id}`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' },
        });
        // alert("you're here now, pre if else")
        if (response.ok) {
            document.location.replace(`/recipe/${id}`);
            // alert('New comment created.');
        } else {
            console.log(response.statusText);
            alert('Commenting error.');
        }
    }
};

document
.querySelector('#comment-button')
.addEventListener('click', newCommentHandler);


