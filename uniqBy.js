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

console.log(uniqBy([2.1, 1.2, 2.3], Math.floor));
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
console.log(uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], "x"));
// => [{ 'x': 1 }, { 'x': 2 }]
