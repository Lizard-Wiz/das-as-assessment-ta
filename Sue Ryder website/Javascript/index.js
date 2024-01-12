// Mobile menu toggle
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


// Form validation for data input

const form = document.getElementById('contactform');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// add event listener to form and listen for submit event
form.addEventListener('submit', (e) => {   
    e.preventDefault(); // prevents default form behaviour before validation
    
if (firstName.value === '') {
    alert('Please enter your first name');
    firstName.focus();
    return false;
}

if (lastName.value === '') {
    alert('Please enter your last name');
    lastName.focus();
    return false;

}

if (email.value === '') {
    alert('Please enter your email address');
    email.focus();
    return false;
}

if (phone.value === '') {
    alert('Please enter your phone number');
    phone.focus();
    return false;
} else {
    return true;
  }
})