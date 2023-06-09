const middle = (arr) => {
  const middleElement = [];

  if (arr.length > 2) {
    const middleIndex = Math.floor(arr.length / 2);
  
    if (middleIndex === (arr.length / 2)) {
      middleElement.push(arr[middleIndex - 1]);
    }

    middleElement.push(arr[middleIndex]);
  }

  return (middleElement);
};

module.exports = middle;