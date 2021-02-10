const btn = document.getElementById("btn");
const quote = document.getElementById("output");

var theQuotes = [
    "Have no fear of perfection because you never reach it",

    "The most painful thing is losing yourself in the process of loving someone too much, and forgetting that you are special too.",

    "what you say about others says a lot about your self"
]
btn.addEventListener("click", function () {
    var rnadomQuote = theQuotes[Math.floor(Math.random() * theQuotes.length)];
    quote.innerHTML = rnadomQuote;
});