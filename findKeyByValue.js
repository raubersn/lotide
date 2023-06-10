const findKeyByValue = (myObject, targetValue) => {
  let targetKey;
  const allValues = Object.values(myObject);

  for (let i = 0; i < allValues.length; i++) {
    if (allValues[i] === targetValue)
    {
      targetKey = Object.keys(myObject)[i];
      break;
    }
  }

  return (targetKey);
};

module.exports = findKeyByValue;