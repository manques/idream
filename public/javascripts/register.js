import { inputValidation } from './input-validation.js';
import { postApi } from './api.js';
// import { apiConstants } from "./api-constant";
// import { formValidation } from './form-validation.js';
import { isSubmittable } from './isSubmittable.js';
// select elements
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');


let validate = false;
let reqData = {
    username: null,
    email: null,
    phone: null,
    password: null,
};

// inputs event selector
inputs.forEach((input) => {
    input.value = "";
    input.addEventListener('input', (event) => inputHandler(event, input));
});

// submit control
isSubmittable(validate, button);

// submit button event selector
button.addEventListener('click', submit);
button.addEventListener('mouseenter', (event) => {
    console.log('enter');
    button.style.boxShadow = '0px 15px 20px rgba(46, 229, 157, 0.4)';
});
button.addEventListener('mouseleave', (event) => {
    console.log('leave');
    button.style.boxShadow = 'none';
});

//  input handler
function inputHandler(event, input) {
    const { id, value } = event.target;
    reqData = {
        ...reqData,
        [id]: value
    };
    // input.value = `${value}`; 
    validate = inputValidation(event, input);
    isSubmittable(validate, button);
    console.log(reqData);
}



// submit eventhandler
function submit(event) {
    // event.preventDefault();
    console.log(reqData);
    postApi('/register', reqData);
}

