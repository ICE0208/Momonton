const body = document.body;
const searchInput = document.querySelector("form#search-form input")

let searchClicked = 0;

body.addEventListener("click", function (event) {
    const searchForm = document.querySelector('#search-form');
    if (searchClicked == 1) {
        searchClicked = 2;
        return;
    }

    if (searchClicked == 2) {
        searchClicked = false;
        searchForm.reset();
        return;
    }
})

searchInput.addEventListener("focus", function (event) {
    searchClicked = 1;
});