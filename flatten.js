//The function takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
const flatten = (arr) => {
  //The array that will store the final result
  const flatArray = [];

  for (let i = 0; i < arr.length; i++) {
    //If the element is a nested array (only one level is supported), all of its elements will be part of the resulting array
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flatArray.push(arr[i][j]);
      }
    } else {
      //If the element is a primitive value, it will be part of the resulting array
      flatArray.push(arr[i]);
    }
  }
  
  return (flatArray);
};

//Exporting the function to be used outside this file
module.exports = flatten;