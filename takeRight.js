const takeRight = (array, n = 1) => {
  const output = [];
  const number = n > array.length ? (n = array.length) : n;
  const breakIndex = array.length - number;

  for (let i = breakIndex; i < array.length; i++) {
    output.push(array[i]);
  }

  return output;
};

console.log(takeRight([1, 2, 3]));
// => [3]

console.log(takeRight([1, 2, 3], 2));
// => [2, 3]

console.log(takeRight([1, 2, 3], 5));
// => [1, 2, 3]

console.log(takeRight([1, 2, 3, 5, 8, 9], 4));
// => []
