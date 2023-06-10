const letterPositions = function(sentence) {
  const results = {};
  //sentence = sentence.replace(/( )/g, "");
  
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    } 
    
    results[sentence[i]].push(i);
  }

  delete results[" "];

  return results;
};

module.exports = letterPositions;