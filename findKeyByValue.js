const assertEqual = function(actual, expected) {
  if (actual === expected)
    return (`✅ Assertion Passed: ${actual} === ${expected}`);
  else
    return  (`❌ Assertion Failed: ${actual} !== ${expected}`);
};


const findKeyByValue = (myObject, targetValue) => {
  let targetKey;
  const allValues = Object.values(myObject);

  for (let i = 0; i < allValues.length; i++) {
    if (allValues[i] === targetValue)
    {
      targetKey = Object.keys(myObject)[i];
      break;
    }
  }

  return (targetKey);
}

/*
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
*/