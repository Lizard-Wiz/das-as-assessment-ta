// For toggling menu depending on screen size 
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// Form validation for input

const submit = document.getElementById('submit');

const validate = (e) => {
  e.preventDefault();
const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

if (firstName.value === "") {
  alert("Please enter your first name");
  firstName.focus();
  return false;
}

if (lastName.value === "") {
  alert("Please enter your last name");
  lastName.focus();
  return false;

}

if (email.value === "") {
  alert("Please enter your email address.");
  email.focus();
  return false;
}

if (phone.value === "") {
  alert("Please enter your phone number");
  phone.focus();
  return false;
}

return true;

}

submit.addEventListener('click', validate);