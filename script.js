let form = document.getElementById('form');
let password1El = document.getElementById('password1');
let password2El = document.getElementById('password2');
let messageContainer = document.querySelector('.message-container');
let message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;
let registered = false;

function validateForm() {
  isValid = form.checkValidity();

  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    message.textContent = 'Passwords do not match';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
    return;
  }
}

function storeFormData() {
  let user = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    phone: form.phone.value,
    email: form.email.value,
    password: form.password.value,
  };
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  validateForm();
  if (isValid && passwordsMatch) {
    storeFormData();
    registered = true;
    if(registered == true){
      let timer = setTimeout(function(){
        window.location.replace("success.html");
      },2000)
    }
  }
}

form.addEventListener('submit', processFormData);
