const uniq = (array) => {
  return [...new Set(array)];
};

console.log(uniq([2, 1, 2]));
// => [2, 1]
