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

var array = [{ x: 1 }, { x: 2 }, { y: 3 }, { x: 1 }];

console.log(pullAllBy(array, [{ x: 1 }, { x: 3 }], "x"));
