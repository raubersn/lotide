//The function takes in an object and callback and returns the first key that meets the criteria specified in callback.
const findKey = (object, callback) => {
  //Retrieving all the object's keys
  const allKeys = Object.keys(object);

  for (let i = 0; i < allKeys.length; i++) {
    //For each key, the callback is executed with the corresponding value
    if (callback(object[allKeys[i]])) {
      //If the call back returns True, the key is returned.
      //Otherwise, the function will return undefined.
      return (allKeys[i]);
    }
  }
};

//Exporting the function to be used outside this file
module.exports = findKey;