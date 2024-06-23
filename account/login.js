/* Landing Page JavaScript */

"use strict";

const loginForm = document.querySelector("#login");
const passwordInput = document.querySelector("#password")
const togglePasswordButton = document.querySelector("#togglePassword")

loginForm.onsubmit = function (event) {
    // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered:
    event.preventDefault();

    // We can use loginForm.username (for example) to access
    // the input element in the form which has the ID of "username".
    const loginData = {
        username: loginForm.username.value,
        password: loginForm.password.value,
    }

    // Disables the button after the form has been submitted already:
    loginForm.loginButton.disabled = true;

    // Time to actually process the login using the function from auth.js!
    login(loginData);
};

function togglePasswordTextDisplay() {
    if (passwordInput.type === "password") {
        password.type = "Text";
        togglePasswordButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        togglePasswordButton.textContent = "Show";
    }
} 

togglePasswordButton.onclick = togglePasswordTextDisplay;

loginForm.onsubmit = function (event) {
    event.preventDefault();

    const loginData = {
        username: loginForm.username.value,
        password: loginForm.password.value,
    };

    loginForm.loginButton.disabled = true;

    login(loginData);
};