const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length)
    return (false);

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return (false);
    }
  }

  return (true);
}

const compareElements = (val1, val2) => {
  if (Array.isArray(val1)) {
    return eqArrays(val1, val2);
  }

  return (val1 === val2);
};

const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1).sort();
  const obj2Keys = Object.keys(object2).sort();
  
  if (!eqArrays(obj1Keys, obj2Keys)) {
    return (false);
  }

  for (const key of Object.keys(object1)) {
    if (!compareElements(object1[key], object2[key])) {
      return (false);
    }   
  }     

  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected)  {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log (`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else {
    console.log  (`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


/*
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

const skirtObject = { color: "red", size: "medium" };
const anotherSkirtObject= { color: "red", size: "large" };

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(skirtObject, anotherSkirtObject);

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
*/