// Access the form we have created
const form  = document.forms["feedbackForm"];
var error = true;

for (let i = 0; i < form.length-1; i++) {
    let field = form[i];

    field.addEventListener('input', function (event) {
        validateField(field);
    });
}

form.addEventListener('submit', async function (event) {
    // checking each form element for emptiness
    let statusBox = document.querySelector(".feedback .block");
    let statusBoxText = document.querySelector(".feedback .block h3");
    statusBox.className = "block";
    error = true;

    for (let i = 0; i < form.length-1; i++) {
        let field = form[i];
        validateField(field);
    }

    if ( error === false) {
        statusBox.className += " danger";
        statusBoxText.textContent = "Oops! You have some errors!";
        event.preventDefault();
    } else {
        statusBox.className += " success";
        statusBoxText.textContent = "Your feedback was successfully sent. Thank you!";
        window.scrollTo(0,0);
        alert("Your feedback was successfully sent. Thank you!");
        window.open("index.html");
    }
});

function validateField(field) {
    let value = field.value;
    let errorTag = document.querySelector("#" + field.id + "+ p.message");
    let fieldName = document.querySelector("label[for=" + field.id + "]");

    if ( value.trim() == "" ) { // Highlight error
        errorTag.textContent = fieldName.textContent + " cannot be blank";
        errorTag.style.display = "block";
        field.style.borderColor = "#d9534f";
        error = false;
    } else {  // Success
        field.style.borderColor = "#5cb85c";
        errorTag.style.display = "none";
    }
}

