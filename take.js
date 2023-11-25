const take = (array, n = 1) => {
  const output = [];
  const number = n > array.length ? (n = array.length) : n;

  for (let i = 0; i < number; i++) {
    output.push(array[i]);
  }

  return output;
};

console.log(take([1, 2, 3]));
// => [1]

console.log(take([1, 2, 3], 2));
// => [1, 2]

console.log(take([1, 2, 3], 5));
// => [1, 2, 3]

console.log(take([1, 2, 3], 0));
// => []
