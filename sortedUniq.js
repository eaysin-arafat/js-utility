const sortedUniq = (array) => {
  return new Set(array);
};

console.log(sortedUniq([1, 1, 2]));
// => [1, 2]
