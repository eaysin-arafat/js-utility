const pullAllBy = (array, values, iteratee) => {
  const isFunction = typeof iteratee === "function";

  return array.filter((element) => {
    const compareValue = isFunction ? iteratee(element) : element[iteratee];

    return !values.some((value) => {
      const compareValueToRemove = isFunction
        ? iteratee(value)
        : value[iteratee];

      return compareValue === compareValueToRemove;
    });
  });
};

module.exports = pullAllBy;
