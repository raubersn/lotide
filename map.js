//The function takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
const map = (array, callBack) => {
  const results = [];

  for (let item of array) {
    //For each item of the array, the callback is called and its result is stored in the resulting array.
    results.push(callBack(item));
  }

  return results;
};

//Exporting the function to be used outside this file
module.exports = map;