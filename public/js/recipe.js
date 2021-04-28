const firstFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#input-title').value.trim();
    const instructions = document.querySelector('#input-instructions');

    if (name && instructions) {
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ name, instructions }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

const ingredientsFormHandler = async (event) => {
    event.preventDefault();

    const ingredients = document.querySelector('#input-ingredients');

    if (ingredients) {
        const response = await fetch(`/api/recipes/${id}`, {
            method: 'PUT',
            body: JSON.stringify({})
        })
    }
}

document
  .querySelector('#new-form')
  .addEventListener('submit', firstFormHandler)