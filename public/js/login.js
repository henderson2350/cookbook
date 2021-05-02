const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log(response.statusText);
        alert('Incorrect username or password.');
        location.reload();
      }
    }
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const bio = document.querySelector('#bio-signup').value.trim();
  
    if (name && username && password && bio) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, username, password, bio }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log(response.statusText);
        alert('This username is already in use.');
        location.reload();
      }
    }
  };
  

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
