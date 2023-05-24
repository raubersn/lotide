const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

 function head (arr)
 {
    if (arr.length === 0)
      return undefined;
    else
      return arr[0];
 }

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// const emptyArray = [];
// assertEqual(head(emptyArray, undefined));
