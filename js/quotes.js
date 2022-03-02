const quotes = [
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "- Estee Lauder -"
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "- Paul Rand -"
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "- John D. Rockefeller- "
    },
    {
        quote: "It is kind of fun to do the impossible",
        author: "- Walt Disney -"
    },
    {
        quote: "There are better starters than me, but I'm a strong finisher.",
        author: "- Usain Bolt -"
    },
]

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;