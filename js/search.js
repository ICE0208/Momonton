const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    window.open('about:blank').location.href = `https://www.google.com/search?q=${searchInput.value}`;
    searchForm.reset();
    searchInput.blur();
});
