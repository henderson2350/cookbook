// const firstFormHandler = async (event) => {
//     event.preventDefault();

//     const name = document.querySelector('#input-title').value.trim();
//     const instructions = document.querySelector('#input-instructions');

//     if (name && instructions) {
//         const response = await fetch('/api/recipes', {
//             method: 'POST',
//             body: JSON.stringify({ name, instructions }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//     }
// }

// const ingredientsFormHandler = async (event) => {
//     event.preventDefault();

//     const ingredients = document.querySelector('#input-ingredients');

//     if (ingredients) {
//         const response = await fetch(`/api/recipes/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify({})
//         })
//     }
// }


const newRecipeHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#recipe-name').value.trim();
    const ingredients = document.querySelector('#ingredient-list').value.trim();
    const instructions = document.querySelector('#instructions').value.trim();
  
    if (name && ingredients && instructions) {
      const response = await fetch('/api/recipe/new', {
        method: 'POST',
        body: JSON.stringify({ name, ingredients, instructions,}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newRecipeHandler);

// document
//   .querySelector('#new-form')
//   .addEventListener('submit', firstFormHandler)