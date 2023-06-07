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

const middle = (arr) => {
  const middleElement = [];

  if (arr.length > 2) {
    const middleIndex = Math.floor(arr.length / 2);
  
    if (middleIndex === (arr.length / 2)) {
      middleElement.push(arr[middleIndex - 1]);
    }

    middleElement.push(arr[middleIndex]);
  }

  return (middleElement);
};


/*
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
*/