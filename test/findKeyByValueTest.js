//Uses the inspect function to properly log the object's properties and values
const inspect = require('util').inspect;
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  console.log(inspect(bestTVShowsByGenre));

  it("Returns \"drama\" for \"The Wire\"", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("Returns undefined for \"That '70s Show\"", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});