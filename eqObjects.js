const assertEqual = function (actual, expected) {
  if (actual === expected)
    return (`✅ Assertion Passed: ${actual} === ${expected}`);
  else
    return (`❌ Assertion Failed: ${actual} !== ${expected}`);
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

/*
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject), true));

const skirtObject = { color: "red", size: "medium" };
const anotherSkirtObject= { color: "red", size: "large" };
console.log(assertEqual(eqObjects(skirtObject , anotherSkirtObject), false));

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false));

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true));

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false));
*/