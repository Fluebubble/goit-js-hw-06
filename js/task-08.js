const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);

const inputEmailFieldEl = document.querySelectorAll(".login-form input")[0]
console.log(inputEmailFieldEl);
inputEmailFieldEl.setAttribute("required", "");

const inputPasswordFieldEl = document.querySelectorAll(".login-form input")[1]
console.log(inputPasswordFieldEl);
inputPasswordFieldEl.setAttribute("required", "");


function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
    };

    console.log(formElements);

    event.currentTarget.reset();
}



