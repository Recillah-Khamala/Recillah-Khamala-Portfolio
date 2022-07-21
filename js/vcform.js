// form validation
const form = document.getElementById('form1')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email');
    const error = document.querySelector('.error');
    const isLowerCase = (str) => str === str.toLowerCase();
    if (!isLowerCase(email.value)) {
      error.innerHTML = 'email should be in lowercase';
      // hide error 5 seconds time so it 65dkcan show up if the there is another error when click again
      setTimeout(() => {
        error.innerHTML = '';
      }, 5000);
    } 
  });

