// Access the form we have created
const form  = document.forms["feedbackForm"];
// Access the attributes we have created
const name = document.getElementById('name');
const nameError = document.querySelector('#name + p.message');

const surname = document.getElementById('surname');
const surnameError = document.querySelector('#surname + p.message');

const level = document.getElementById('level');
const levelError = document.querySelector('#level + p.message');

const comment = document.getElementById('comment');
const commentError = document.querySelector('#comment + p.message');

form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit

    // checking each form element for emptiness
    for (let i = 0; i < form.length-1; i++) {

        let field = form[i];
        let value = field.value;
        let errorTag = document.querySelector("#" + field.id + "+ p.message");
        let fieldName = document.querySelector("label[for=" + field.id + "]");

        if ( value.trim() == "" ) {
            errorTag.textContent = fieldName.textContent + " cannot be blank";
            errorTag.style.display = "block";
            field.style.borderColor = "#d9534f"
        }
    }

    event.preventDefault();


});

