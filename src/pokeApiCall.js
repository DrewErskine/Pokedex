const fetch = require("node-fetch");

// gets Pokémon data from the API
async function fetchPokemonData(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    return await response.json();
  } catch (error) {
    console.error("Pokemon not found");
    return null;
  }
}

// get item data from the API
async function fetchItemData(itemName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/item/${itemName.toLowerCase()}`
    );
    return await response.json();
  } catch (error) {
    console.error("Item not found");
    return null;
  }
}

// get move data from the API
async function fetchMoveData(moveName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/move/${moveName.toLowerCase()}`
    );
    return await response.json();
  } catch (error) {
    console.error("Move not found");
    return null;
  }
}

module.exports = { fetchPokemonData, fetchItemData, fetchMoveData };
