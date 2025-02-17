import {loveQuotes}  from "./Love-Quots.js";
const Quots = document.querySelector('.quotes');
const author = document.querySelector('.author');
const btn = document.querySelector('button');
console.log(loveQuotes.length);

function autoQuots() {
    let randomNumber = Math.floor(Math.random() * loveQuotes.length);
    Quots.textContent = loveQuotes[randomNumber].quote;
    author.textContent = loveQuotes[randomNumber].author;
}
autoQuots();
btn.addEventListener("click" , (autoQuots));