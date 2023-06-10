const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it("For arrays with one or two elements, there is no middle. Return an empty array", () => {
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2]), []);
  });
  it("For arrays with odd number of elements, an array containing a single middle element should be returned.", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("For arrays with an even number of elements, an array containing the two elements in the middle should be returned", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});