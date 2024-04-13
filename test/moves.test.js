const assert = require("assert");
const axios = require("axios");

describe("Move Data Fetch", function () {
  it("should fetch details for Thunder Punch correctly", async function () {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/move/thunder-punch"
    );
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.data.name, "thunder-punch");
  });

  // Test fetching details of a specific move
  it("should fetch details for a specific move and check power", async function () {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/move/thunder-punch"
    );
    assert.strictEqual(response.data.power, 75);
  });

  // Test move accuracy
  it("should check the accuracy of a move", async function () {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/move/thunder-punch"
    );
    assert.strictEqual(response.data.accuracy, 100);
  });

  // Test move PP (Power Points)
  it("should verify the PP of a move", async function () {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/move/thunder-punch"
    );
    assert.strictEqual(response.data.pp, 15);
  });

  // Test move type
  it("should verify the type of the move", async function () {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/move/thunder-punch"
    );
    assert.strictEqual(response.data.type.name, "electric");
  });
  //for future maybe
  it("should check the move effectiveness against water type", async function () {
    const response = await axios.get("https://pokeapi.co/api/v2/type/water");
    assert(
      response.data.damage_relations.double_damage_from.some(
        (type) => type.name === "electric"
      ),
      true
    );
  });
});
