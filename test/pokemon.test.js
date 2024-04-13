const assert = require("assert");
const axios = require("axios");

describe("Pokemon Test", function () {
  it("should fetch Pokeball data correctly", async function () {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/item/poke-ball"
    );
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.data.name, "poke-ball");
  });

  // Test fetching a specific Pokémon by name
  it("should fetch details of a specific pokemon", async function () {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    assert.strictEqual(response.data.name, "ditto");
  });

  // Test for handling abilities of a Pokémon
  it("should verify abilities of the Pokémon", async function () {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    assert.strictEqual(response.data.abilities[0].ability.name, "limber");
  });
});
