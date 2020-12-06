// Access the form we have created
const form  = document.forms["feedbackForm"];
var error = true;

// Access all the fields of the form
for (let i = 0; i < form.length-1; i++) {
    let field = form[i]; // select the i-th field

    field.addEventListener('input', function (event) { // validate the field
        validateField(field);
    });
}

form.addEventListener('submit', function (event) {  // validate before submitting the form
    // checking each form element for emptiness
    let statusBox = document.querySelector(".feedback .block");
    let statusBoxText = document.querySelector(".feedback .block h3");
    statusBox.className = "block";
    error = true;

    for (let i = 0; i < form.length-1; i++) {
        let field = form[i];
        validateField(field);
    }

    if ( error === false) { // error
        statusBox.className += " danger";
        statusBoxText.textContent = "Oops! You have some errors!";
        event.preventDefault();
    } else { // success
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

