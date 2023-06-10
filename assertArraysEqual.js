//Importing the required external function
//eqArrays compares two arrays and returns True if all the elements (recursively) are equal
const eqArrays = require("./eqArrays");

//Will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = (firstArray, secondArray) => {
  //Logs a message according to the comparison of the two arrays
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`❌ Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

//Exporting the function to be used outside this file
module.exports = assertArraysEqual;