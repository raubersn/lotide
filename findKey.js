const findKey = (object, callback) => {
  let targetKey;
  const allKeys = Object.keys(object);

  for (let i = 0; i < allKeys.length; i++) {
    if (callback(object[allKeys[i]]))
    {
      return (allKeys[i]);
    }
  }
};

module.exports = findKey;