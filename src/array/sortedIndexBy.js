const sortedIndexBy = (array, value, iteratee) => {
  const isFunction = typeof iteratee === "function";

  for (index in array) {
    const compareArray = isFunction
      ? iteratee(array[index])
      : array[index][iteratee];
    const compareValue = isFunction ? iteratee(value) : value[iteratee];

    if (compareArray >= compareValue) {
      return index;
    }
  }
};

module.exports = sortedIndexBy;
