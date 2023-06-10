//The function takes in a collection of items and returns a specific subset of those items.
const countOnly = (allItems, itemsToCount) => {
  const results = {};

  //Loopin through all the desired items
  for (const item of allItems) {
    //If the current item is set (present in the object and its value is True) be be counted, the iteration continues
    if (itemsToCount[item]) {
      if (results[item]) {
        //If the item is already stored in the result object, the counter ofr it is increased
        results[item] += 1;
      } else {
        //If the item is not stored in the result object, its counter is initialized with 1
        results[item] = 1;
      }
    }
  }

  return results;
};

//Exporting the function to be used outside this file
module.exports = countOnly;