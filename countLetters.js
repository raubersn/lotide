const assertEqual = function(actual, expected) {
  if (actual === expected)
    return (`✅ Assertion Passed: ${actual} === ${expected}`);
  else
    return  (`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (sentence) => {
  const results = {};
  sentence = sentence.replace(/( )/g, "");
  
  for (const letter of sentence) {
    if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
  }

  return results;
};

console.log(countLetters("lighthouse in the house"));