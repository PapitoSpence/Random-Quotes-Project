//Variable Declaration
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";


let getQuote = () => {
  // Make a fetch request to get json data from the api
  let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
      });
  };
  
  window.addEventListener("load", getQuote);
  btn.addEventListener("click", getQuote);
}


