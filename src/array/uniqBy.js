const uniqBy = (array, iteratee) => {
  const isFunction = typeof iteratee === "function";
  const output = [];
  const iterateSet = new Set();

  if (Array.isArray(array)) {
    for (const value of array) {
      const iterateValue = isFunction ? iteratee(value) : value[iteratee];

      if (!iterateSet.has(iterateValue)) {
        iterateSet.add(iterateValue);
        output.push(value);
      }
    }
  }

  return output;
};

module.exports = uniqBy;
