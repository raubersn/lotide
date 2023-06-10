const flatten = (arr) => {
  const flatArray = [];

  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flatArray.push(arr[i][j]);
      }
    } 
    else {
      flatArray.push(arr[i]);
    } 
  }
  
  return (flatArray);
};

module.exports = flatten;