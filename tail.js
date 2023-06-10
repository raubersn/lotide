//The function takes in an array and returns everything except the first element of the array.
const tail = (arr) => {
  //Splits the array, excluding its head.
  return (arr.slice(1));
};

//Exporting the function to be used outside this file
module.exports = tail;