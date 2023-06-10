const assert = require('chai').assert;
const tail = require("../tail");

// Test Case: Check the original array
describe("#tail", () => {
  it("returns [\"Lighthouse\", \"Labs\"] for [\"Yo Yo\", \"Lighthouse\", \"Labs\"] keeping the 3 elements in the original array", () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
    assert.strictEqual(words.length, 3); // original array should still have 3 elements!
  });
  it("An array with only one element should yield an empty array for its tail", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("An empty array should yield an empty array for its tail", () => {
    assert.deepEqual(tail([]), []);
  });
});
