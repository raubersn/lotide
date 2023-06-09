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

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log (`✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  }
  else {
    console.log  (`❌ Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};


const map = function(array, callBack) {
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  }
  return results;
}

/*
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

assertArraysEqual(map([0, 1, 2, 3, 4, 5], (number) => {return (number % 2 === 0);}), [true, false, true, false, true, false]);
assertArraysEqual(map([0.4, 1.2, 2, 2.5, 3.8, 5.156], (number) => {return (Math.round(number));}), [0, 1, 2, 3, 4, 5]);
*/