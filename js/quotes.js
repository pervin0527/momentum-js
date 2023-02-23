const quotes = [
    {
        quote : "When you have faults, do not fear to abandon them.",
        author : "Confucius"
    },
    {
        quote : "They must often change who would be constant in happiness or wisdom.",
        author : "Confucius"
    },
    {
        quote : "Age is no guarantee of maturity.",
        author : "Lawana Blackwell"
    },
    {
        quote : "You will face many defeats in life, but never let yourself be defeated.",
        author : "Maya Angelou"
    },
    {
        quote : "The goal of life is living in agreement with nature.",
        author : "Zeno"
    },
    {
        quote : "This too shall pass.",
        author : "Et hoc transibit"
    },
    {
        quote : "The die is cast.",
        author : "Julius caesar"
    },
    {
        quote : "Only I can change me life, no one can do it for me.",
        author : "Carol Burnett"
    },
    {
        quote : "When in doubt, choose change.",
        author : "Lily leung"
    },
    {
        quote : "Life is unfair, get used to it.",
        author : "Bill Gates"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// list의 dict에 접근하는 방법은 python과 동일
// console.log(quotes[0]["quote"], quotes[0]["author"]);

const randomNumber = Math.random() * quotes.length;
// console.log(Math.round(randomNumber));
// console.log(Math.ceil(randomNumber));
// console.log(Math.floor(randomNumber));
// console.log(quotes[Math.floor(randomNumber)]);
const todaysQuote = quotes[Math.floor(randomNumber)];
quote.innerText = todaysQuote["quote"]; // todaysQuote.quote 로 써도 가능하다.
author.innerText = todaysQuote["author"]; // todaysQuote.author 로 써도 가능하다.