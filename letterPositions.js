//The function takes in a string and returns all indices of letter positions in the string.
const letterPositions = (sentence) => {
  const results = {};
    
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      //If the leter is not present in the resulting object, includes a key for it
      results[sentence[i]] = [];
    }
    
    //Adding the letter's position to its key's array
    results[sentence[i]].push(i);
  }

  //Removing the key " " to avoid reporting blank spaces
  //* This method was selected instead of adding another condition to each element in the loop in favour of performance
  delete results[" "];

  return results;
};

//Exporting the function to be used outside this file
module.exports = letterPositions;