const initial = (array) => {
  const output = [];

  for (let i = 0; i < array.length - 1; i++) {
    output.push(array[i]);
  }
  return output;
};

console.log(initial([1, 2, 3, 5, 6]));
