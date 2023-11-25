const union = (...arrays) => {
  const seen = new Set();

  for (array of arrays) {
    const isArray = typeof array === "object";

    if (isArray) {
      for (arr of array) {
        seen.add(arr);
      }
    }
  }

  return [...seen];
};

console.log(union([2], [1, 2]));
// => [2, 1]
