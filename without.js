//Will return a subset of a given array, removing unwanted elements.
const without = (origin, values) => {
  
  //Creating a copy of the array to avoid modifying the original array
  const wanted = origin.concat();
  
  //Looping through all the unwanted values
  for (let i = 0; i < values.length; i++) {
    //while there are occurences of the unwanted value, they will be removed by the Splice function
    while (wanted.indexOf(values[i]) !== -1) {
      //Deleting one character where the unwanted value was found
      wanted.splice(wanted.indexOf(values[i]), 1);
    }
  }

  return (wanted);
};

//Exporting the function to be used outside this file
module.exports = without;