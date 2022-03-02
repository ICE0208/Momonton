const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.classList.add("background");

document.body.appendChild(bgImage);

document.addEventListener("DOMContentLoaded", function (event) {
    bgImage.setAttribute("src", `img/${chosenImage}`);
})