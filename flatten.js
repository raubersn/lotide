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

const flatten = (arr) => {
  const flatArray = [];

  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flatArray.push(arr[i][j]);
      }
    } 
    else {
      flatArray.push(arr[i]);
    } 
  }
  
  return (flatArray);
};

/*
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2, 3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2], [3, 4, 5], [6]]), [1, 2, 3, 4, 5, 6]);
*/