const assert = require("assert");
const axios = require("axios");

describe("Item Data Fetch", function () {

  it("should fetch Pokeball data correctly", async function () {
    const response = await axios.get("https://pokeapi.co/api/v2/item/1/");
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.data.name, "master-ball"); //hahahaha its a master ball
  });


  it("should fetch multiple items and check the item count", async function () {
    const response = await axios.get("https://pokeapi.co/api/v2/item/");
    assert.strictEqual(response.data.count, 2110); 
  });

  // Test to ensure item effects are listed correctly
  it("should check the effect of a specific item", async function () {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/item/poke-ball"
    );
    assert.strictEqual(
      response.data.effect_entries[0].effect.includes("Attempts to catch"),
      true
    );
  });

  //cost
  it("should fetch the cost of a specific item", async function () {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/item/poke-ball"
    );
    assert.strictEqual(response.data.cost, 200);
  });
});
