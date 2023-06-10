//Importing the required external function
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');

const countLetters = require('./countLetters');
const countOnly = require('./countOnly');

const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

//Exporting all the functions in Lotide as an object using shorthand syntax from ES6.
module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,

  countLetters,
  countOnly,

  eqArrays,
  eqObjects,

  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without
};