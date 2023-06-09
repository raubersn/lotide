const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const skirtObject = { color: "red", size: "medium" };
const anotherSkirtObject= { color: "red", size: "large" };
assertEqual(eqObjects(skirtObject , anotherSkirtObject), false);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

assertEqual(eqObjects({ a: { y: 0, z: { a: { z: 1 }, b: { a: { z: 1 }, b: 2 } } }, b: 2 }, { a: { y: 0, z: { a: { z: 1 }, b: { a: { z: 1 }, b: 2 } } }, b: 2 }), true);