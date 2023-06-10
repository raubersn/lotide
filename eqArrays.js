//The function takes in 2 arrays and returns true if the arrays are equal and false otherwise.
//The function is recursive and supports nested arrays.
const eqArrays = (firstArray, secondArray) => {
  //If the arrays' size is different, they are not the same
  if (firstArray.length !== secondArray.length)
    return (false);
  
  for (let i = 0; i < firstArray.length; i++) {
    //If the element is an Array, the function will be called recursively for that particular element
    if (Array.isArray(firstArray[i])) {
      if (!eqArrays(firstArray[i], secondArray[i])) {
        return (false);
      }
    } else if (firstArray[i] !== secondArray[i]) {
      //If the element is a primitive value and they are not the same, the function returns False.
      return (false);
    }
  }

  //If no exception was found, the arrays are equal and the function returns True.
  return (true);
};

//Exporting the function to be used outside this file
module.exports = eqArrays;