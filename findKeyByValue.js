//The function takes in an object and a value and returns the first key that corresponds to that value.
const findKeyByValue = (myObject, targetValue) => {
  let targetKey;
  // Retrieveing all the object's values
  const allValues = Object.values(myObject);

  for (let i = 0; i < allValues.length; i++) {
    //For each value, if it matches the target the corresponding key is stored
    if (allValues[i] === targetValue) {
      targetKey = Object.keys(myObject)[i];
      break;
    }
  }

  //If the value is not present, the undefined value is returned
  return (targetKey);
};

//Exporting the function to be used outside this file
module.exports = findKeyByValue;