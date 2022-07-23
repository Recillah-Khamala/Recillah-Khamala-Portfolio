// form validation
const form = document.getElementById('form1');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email');
  const error = document.querySelector('.error');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email.value)) {
    error.innerHTML = 'email should be in lowercase';
    setTimeout(() => {
      error.innerHTML = '';
    }, 5000);
  }
});
