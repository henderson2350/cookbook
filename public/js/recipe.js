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