const form = document.querySelector('.sign-up-form');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function validateData() {
    // Store the data inputted in the fields above
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Verify the data if valid
    if(firstNameValue === '') {
        setErrorFor(firstName, "First Name cannot be empty");
    } else {
        setSuccessFor(firstName);
    }
    
    if(lastNameValue === '') {
        setErrorFor(lastName, "Last Name cannot be empty");
    } else {
        setSuccessFor(lastName);
    }

    if(emailValue === '') {
        setErrorFor(email, "email cannot be empty");
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Looks like this is not an email");
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, "Password cannot be empty");
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.textContent = message;
    input.placeholder = "";

    if(input === email && input !== '') {
        input.style.color = 'var(--red)';
    }
}

email.addEventListener('focus', () => {
    email.removeAttribute('style');
})

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control";
}

function isEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    validateData();
});