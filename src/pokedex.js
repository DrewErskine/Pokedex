const {
  fetchPokemonData,
  fetchItemData,
  fetchMoveData,
} = require("./pokeApiCall.js");

const {
  displayMenu,
  getUserInput,
  terminateInterface,
  displayPokemon,
  displayItem,
  displayMove,
} = require("./pokedexUI.js");

/**
 * Controls application flow
 * manages user input
 * navigation between functions
 */
function runApplication() {
  displayMenu();
  getUserInput("Please enter your choice").then((userChoice) => {
    switch (userChoice) {
      case "1":
        handleSearch("pokemon");
        break;
      case "2":
        handleSearch("item");
        break;
      case "3":
        handleSearch("move");
        break;
      case "4":
        terminateInterface();
        break;
      default:
        console.log("\x1b[31mInvalid- please try again.\x1b[0m");
        runApplication();
    }
  });
}

/**
 * Handles the search operation (Pokémon, item, or move).
 * API called and displays it using the respective display function.
 * @param {string} searchType - The type of search
 */
async function handleSearch(searchType) {
  const searchTerm = await getUserInput(
    `Please enter your ${searchType} search term`
  );
  let searchData;
  switch (searchType) {
    case "pokemon":
      searchData = await fetchPokemonData(searchTerm);
      if (searchData) displayPokemon(searchData);
      break;
    case "item":
      searchData = await fetchItemData(searchTerm);
      if (searchData) displayItem(searchData);
      break;
    case "move":
      searchData = await fetchMoveData(searchTerm);
      if (searchData) displayMove(searchData);
      break;
  }
  await runApplication();
}

// Start
runApplication();
