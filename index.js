import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

console.log(prevButton);

let maxPage = 1;
let page = 1;
const searchQuery = "";

prevButton?.addEventlistener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacter();
  }
});
nextButton?.addEventlistener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacter();
  }
});

async function fetchCharacter() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    console.log(data.info);
    const characters = data.results;
    characters.forEach((character) => {
      cardContainer.append(CharacterCard(character));
    });
  } catch (error) {
    console.error("Fehler :", error);
  }
}
fetchCharacter();
