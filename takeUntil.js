const takeUntil = function(array, callBack) {
  const results = [];
  let i = 0;

  while (!callBack(array[i]) && (i < array.length)) {
    results.push(array[i]);
    i++;
  }

  return results;
};

module.exports = takeUntil;