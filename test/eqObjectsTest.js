//Uses the inspect function to properly log the object's properties and values
const inspect = require('util').inspect;
const assert = require('chai').assert;
const eqObjects = require("../eqObjects");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const skirtObject = { color: "red", size: "medium" };
const anotherSkirtObject = { color: "red", size: "large" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

describe("#eqObjects", () => {
  it(`returns False for ${inspect(shirtObject)} and ${inspect(anotherShirtObject)}`, () => {
    assert.strictEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });
  it(`returns False for ${inspect(skirtObject)} and ${inspect(anotherSkirtObject)}`, () => {
    assert.strictEqual(eqObjects(skirtObject , anotherSkirtObject), false);
  });
  it(`returns False for ${inspect(shirtObject)} and ${inspect(longSleeveShirtObject)}`, () => {
    assert.strictEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
  });
  it(`returns False for ${inspect(multiColorShirtObject)} and ${inspect(anotherMultiColorShirtObject)}`, () => {
    assert.strictEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
  });
  it(`returns False for ${inspect(multiColorShirtObject)} and ${inspect(longSleeveMultiColorShirtObject)}`, () => {
    assert.strictEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
  });
  it("Returns (recursive) True for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("Returns (recursive) False for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("Returns (recursive) False for { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
  it("Returns (recursive) True for { a: { y: 0, z: { a: { z: 1 }, b: { a: { z: 1 }, b: 2 } } }, b: 2 } and { a: { y: 0, z: { a: { z: 1 }, b: { a: { z: 1 }, b: 2 } } }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: { a: { z: 1 }, b: { a: { z: 1 }, b: 2 } } }, b: 2 }, { a: { y: 0, z: { a: { z: 1 }, b: { a: { z: 1 }, b: 2 } } }, b: 2 }), true);
  });
});