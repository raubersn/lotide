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

const letterPositions = function(sentence) {
  const results = {};
  //sentence = sentence.replace(/( )/g, "");
  
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    } 
    
    results[sentence[i]].push(i);
  }

  delete results[" "];

  return results;
};


//console.log(letterPositions("lighthouse in the house"));
//assertArraysEqual(letterPositions("hello").e, [1]);