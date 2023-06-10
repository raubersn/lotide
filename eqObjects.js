//Importing the required external function
//eqArrays compares two arrays and returns True if all the elements (recursively) are equal
const eqArrays = require("./eqArrays");

//Auxiliar function to select the correct function to compare the element according to its type
const compareElements = (val1, val2) => {
  //eqArrays is selected for arrays
  if (Array.isArray(val1)) {
    return eqArrays(val1, val2);
  }

  //eqObjects is selected for objects
  if (typeof(val1) === "object") {
    return eqObjects(val1, val2);
  }

  //strict equality operator is selected for primitive values
  return (val1 === val2);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  //Ordering the keys to allow a comparison despite the declaration order
  const obj1Keys = Object.keys(object1).sort();
  const obj2Keys = Object.keys(object2).sort();
  
  //If the keys are not the same, the object is not equal
  if (!eqArrays(obj1Keys, obj2Keys)) {
    return (false);
  }

  //For each key/value pair, compare them accordingly to the value's type
  for (const key of Object.keys(object1)) {
    //An auxiliar function is used to select the right function
    if (!compareElements(object1[key], object2[key])) {
      return (false);
    }
  }

  return true;
};

//Exporting the function to be used outside this file
module.exports = eqObjects;