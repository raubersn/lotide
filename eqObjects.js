const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const compareElements = (val1, val2) => {
  if (Array.isArray(val1)) {
    return eqArrays(val1, val2);
  }

  if (typeof(val1) === "object") {
    return eqObjects(val1, val2);
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

module.exports = eqObjects;