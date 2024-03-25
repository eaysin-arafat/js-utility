const sortedLastIndexBy = (array, value, iteratee) => {
  const isFunction = typeof iteratee === "function";

  for (let i = array.length; i > 0; i--) {
    const compareArray = isFunction ? iteratee(array[i]) : array[i][iteratee];
    const compareValue = isFunction ? iteratee(value) : value[iteratee];

    if (compareArray >= compareValue) {
      return i;
    }
  }

  return -1;
};

module.exports = sortedLastIndexBy;
