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

var objects = [{ x: 4 }, { x: 5 }];

console.log(
  sortedIndexBy(objects, { x: 4 }, function (o) {
    return o.x;
  })
);
// => 0

// The `_.property` iteratee shorthand.
console.log(sortedIndexBy(objects, { x: 4 }, "x"));
// => 0
