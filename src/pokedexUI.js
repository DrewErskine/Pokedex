const readline = require("readline");

// Initialize the readline interface for command-line interaction.
const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Displays the main menu with options for the user to choose from.
 * Provides examples for each type of search to guide user input.
 */
function displayMenu() {
  console.log("\x1b[1m\x1b[34mOptions:\x1b[0m");
  console.log("\x1b[33m1.\x1b[32mPokémon\x1b[0m (\x1b[2mExample: Magikarp\x1b[0m)");
  console.log("\x1b[33m2.\x1b[32mItems\x1b[0m (\x1b[2mExample: Master ball\x1b[0m)");
  console.log("\x1b[33m3.\x1b[32mMovesets\x1b[0m (\x1b[2mExample: Thunderbolt\x1b[0m)");
  console.log("\x1b[33m4.\x1b[31mExit\x1b[0m");
}

/**
 * Prints detailed information about a Pokémon.
 * name
 * weight
 * types
 * stats console.
 * @param {Object} pokemon - The Pokémon object
 */
function displayPokemon(pokemon) {
  console.log(`Name: ${pokemon.name}`);
  console.log(`Weight: ${pokemon.weight} kg`);
  console.log("Types:");
  pokemon.types.forEach((type) => {
    console.log(`- ${type.type.name}`);
  });
  console.log("Stats:");
  pokemon.stats.forEach((stat) => {
    console.log(`${stat.stat.name}: ${stat.base_stat}`);
  });
  console.log(``);
}

/**
 * Prints details about an item
 * name
 * cost
 * effects
 * @param {Object} item - The item object
 */
function displayItem(item) {
  console.log(`Name: ${item.name}`);
  console.log(`Cost: ${item.cost}`);
  if (item.effect_entries && item.effect_entries.length > 0) {
    console.log(`Effect: ${item.effect_entries[0].effect}`);
  }
  console.log(``);
}

/**
 * Prints detailed information about a move.
 * name
 * power
 * PP (Power Points)
 * type
 * accuracy.
 * @param {Object} move - The move object
 */
function displayMove(move) {
  console.log(`Name: ${move.name}`);
  console.log(`Power: ${move.power}`);
  console.log(`PP: ${move.pp}`);
  console.log(`Type: ${move.type.name}`);
  console.log(`Accuracy: ${move.accuracy}`);
  console.log(``);
}

/**
 * Closes the readline interface
 * terminates the app.
 */
function terminateInterface() {
  rlInterface.close();
}

/**
 * Prompts user for input
 * Handles empty inputs
 * @param {string} question
 * @returns {Promise<string>}
 */
async function getUserInput(question) {
  return new Promise((resolve) => {
    rlInterface.question("\x1b[36m" + question + "\x1b[0m: ", (input) => {
      if (input.trim() === "") {
        console.log("\x1b[31mcannot be empty.\x1b[0m");
        return resolve(getUserInput(question));
      }
      resolve(input.trim());
    });
  });
}

module.exports = {
  displayPokemon,
  displayItem,
  displayMove,
  getUserInput,
  terminateInterface,
  displayMenu,
};
