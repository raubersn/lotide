//Function that takes in 2 values and returns true if they are equal and false otherwise.
const assertEqual = (actual, expected) => {
  //Logs a message according to the comparison of the two primitive values
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Exporting the function to be used outside this file
module.exports = assertEqual;