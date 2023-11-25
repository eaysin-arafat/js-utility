const unzip = (...arrays) => {
  const output = [];

  for (array of arrays) {
    if (Array.isArray(array)) {
      output.push(array);
    }
  }

  return output;
};

var zipped = unzip(["a", "b"], [1, 2], [true, false], 7);
// => [['a', 1, true], ['b', 2, false]]

console.log(zipped);
// => [['a', 'b'], [1, 2], [true, false]]
