const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form > input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    // prevent Refresh
    event.preventDefault();
    const username = loginInput.value;
    // hide the loginForm
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // set username at localStorage
    localStorage.setItem(USERNAME_KEY, username);
    // show the greetings
    paintGreetings(username);
    // show the logout Button
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username){
    greeting.innerText = `Hello, ${username}!`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
    // show the logout Button
    logoutForm.classList.remove(HIDDEN_CLASSNAME);

}