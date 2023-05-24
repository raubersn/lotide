const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  return (arr.slice(1));
};

// Test Case: Check the original array
// let words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// assertEqual(words.length, 3); // original array should still have 3 elements!

// words = [1];
// console.log(tail(words));
// assertEqual(tail(words).length, 0); // An array with only one element should yield an empty array for its tail

// words = [];
// console.log(tail(words));
// assertEqual(tail(words).length, 0); // An empty array should yield an empty array for its tail
