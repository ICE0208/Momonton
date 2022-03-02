const inputs = [
    {
        url: document.querySelector("form#login-form input"),
        placeholder: document.querySelector("form#login-form input").placeholder,
    },
    {
        url: document.querySelector("form#todo-form input"),
        placeholder: document.querySelector("form#todo-form input").placeholder,
    }
]
const BLANK_TEXT = "";

inputs.forEach(element => {
    element.url.addEventListener("focus", function(event) {
        element.url.placeholder = BLANK_TEXT;
    })
    
    element.url.addEventListener("blur", function(event) {
        element.url.placeholder = element.placeholder
    })
});