const map = require('../map');
const assertArraysEqual = require("../assertArraysEqual");


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

assertArraysEqual(map([0, 1, 2, 3, 4, 5], (number) => {
  return (number % 2 === 0);
}), [true, false, true, false, true, false]);

assertArraysEqual(map([0.4, 1.2, 2, 2.5, 3.8, 5.156], (number) => {
  return (Math.round(number));
}), [0, 1, 2, 3, 4, 5]);
