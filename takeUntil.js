//The function takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
const takeUntil = (array, callBack) => {
  const results = [];
  let i = 0;

  //The items will be included in the resulting array until the criteria specified in the callback is met or the array ends.
  while (!callBack(array[i]) && (i < array.length)) {
    results.push(array[i]);
    i++;
  }

  return results;
};

//Exporting the function to be used outside this file
module.exports = takeUntil;