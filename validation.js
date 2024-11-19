const form = document.getElementById('signup_form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const occupation=document.getElementById("occupation");
const expertise=document.getElementById("expertise");
const reTypePassword=document.getElementById("reTypePassword");
const gender=document.getElementById("gender");
const address=document.getElementById("address");
const bio=document.getElementById("bio");
const signUp=document.getElementById("signUp");


//Show input error messages
function showError(input, message) {
    const signup = input.parentElement;
    signup.className = 'signup_form error';
    const small = signup.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    const signup = input.parentElement;
    signup.className = 'signup success';
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is not invalid');
    }
}


//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}


//check input Length
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
    }else {
        showSucces(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}


//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([firstName, email, password, reTypePassword]);
    checkLength(firstName,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordMatch(password, reTypePassword);
});