const countLetters = (sentence) => {
  const results = {};
  sentence = sentence.replace(/( )/g, "");
  
  for (const letter of sentence) {
    if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
  }

  return results;
};

module.exports = countLetters;