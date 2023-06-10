const without = (origin, values) => {
  const wanted = origin.concat();
  
  for (let i = 0; i < values.length; i++) {
    while (wanted.indexOf(values[i]) !== -1){
      wanted.splice(wanted.indexOf(values[i]), 1);
    }
  }

  return (wanted);
};

module.exports = without;