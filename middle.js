//The function takes in an array and returns middle most element of the array.
const middle = (arr) => {
  const middleElement = [];

  //For arrays with one or two elements, there is no middle. Returns an empty array.
  if (arr.length > 2) {
    const middleIndex = Math.floor(arr.length / 2);
  
    if (middleIndex === (arr.length / 2)) {
      //For arrays with an even number of elements, an array containing the two elements in the middle is returned.
      //The second element (single middle element) is added outside the IF block.
      middleElement.push(arr[middleIndex - 1]);
    }

    //For arrays with odd number of elements, an array containing a single middle element is returned.
    middleElement.push(arr[middleIndex]);
  }

  return (middleElement);
};

//Exporting the function to be used outside this file
module.exports = middle;