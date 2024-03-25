const fromPairs = (array) => {
  const output = Object.fromEntries(array);

  return output;
};

module.exports = fromPairs;
