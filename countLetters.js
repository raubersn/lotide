//Function that takes in a sentence and returns a count of each of the letters in the sentence.
const countLetters = (sentence) => {
  //Creating the object to store the count of each letter
  const results = {};
  //Blank spaces should not be considered. They are all removed by a regular expression on replace()
  sentence = sentence.replace(/( )/g, "");
  
  for (const letter of sentence) {
    //If the letter already has a key on results, add 1 to the counter
    if (results[letter]) {
      results[letter] += 1;
    } else {
      //If it is a new letter the counter for it is initialized with 1
      results[letter] = 1;
    }
  }

  return results;
};

//Exporting the function to be used outside this file
module.exports = countLetters;