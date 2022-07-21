const emailForm = document.getElementById('email');
const nameForm = document.getElementById('name');
const messageForm = document.getElementById('message');

function handleChange() {
  const myFormData = {
    name: nameForm.value,
    email: emailForm.value,
    message1: messageForm.value,
  };

  localStorage.setItem('form', JSON.stringify(myFormData));
}

nameForm.onchange = handleChange;
emailForm.onchange = handleChange;
messageForm.onchange = handleChange;
