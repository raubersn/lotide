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

const without = (origin, values) => {
  const wanted = origin.concat();
  
  for (let i = 0; i < values.length; i++) {
    while (wanted.indexOf(values[i]) !== -1){
      wanted.splice(wanted.indexOf(values[i]), 1);
    }
  }

  return (wanted);
}

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);