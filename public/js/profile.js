const followButtonHandler = async (event) => {
    event.preventDefault()

    if (event.target.hasAttribute('data-id')) {
      const following = event.target.getAttribute('data-id');
      const response = await fetch(`/api/users/${id}`, {
        method: 'POST',
        body: JSON.stringify({ following }),
        headers: { 'Content-Type': 'application/json' },
      });

      } else {
        alert('Failed to follow');
      }
    }

document
    .querySelector('.follow-button')
    .addEventListener('submit', followButtonHandler)