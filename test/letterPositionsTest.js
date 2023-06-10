const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositionsTests", () => {
  it("returns [1] for \"hello\"", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("returns [3, 5, 15, 18] for \"lighthouse in the house\"", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
});