//Importing the required external function
//eqAObjects compares two objects and returns True if all the key/value pairs (recursively) are equal
const eqObjects = require('./eqObjects');

//Will take in two objects and console.log an appropriate message to the console.
const assertObjectsEqual = (actual, expected) => {
  //Uses the inspect function to properly log the object's properties and values
  const inspect = require('util').inspect;
  
  //Logs a message according to the comparison of the two objects
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//Exporting the function to be used outside this file
module.exports = assertObjectsEqual;