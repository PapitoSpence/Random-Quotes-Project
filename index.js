let animeTitle = document.querySelector(".anime__title");
let animeCharacter = document.querySelector(".anime__character");
let animeQuote = document.querySelector(".anime__quote");
let button = document.querySelector(".btn");

getAnimeQuotes();

async function getAnimeQuotes() {
  // Make a fetch request to get json data from the api
  const response = await fetch("https://animechan.vercel.app/api/rando")

  // Check if response was successful or not using the .ok method
  if (!response.ok) {
		throw new Error(`${animeQuote.innerHTML = `error! status: ${response.status}`}`);
	}

  // Retrieve response as JSON using the json() function
  const data = await response.json()

  // Display HTMl using the API's data
  animeTitle.innerHTML = data.anime;
  animeCharacter.innerHTML = data.character;
  animeQuote.innerHTML = data.quote;
}

button.addEventListener('click', getAnimeQuotes);