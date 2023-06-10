const letterPositions = require('../letterPositions');
const assertArraysEqual = require("../assertArraysEqual");


console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);