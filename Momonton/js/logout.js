const logoutButton = document.querySelector(".logout");

logoutButton.addEventListener("click", function(event) {
    localStorage.removeItem(USERNAME_KEY);
    logoutForm.classList.add(HIDDEN_CLASSNAME);

    location.reload();
})