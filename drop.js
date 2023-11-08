const drop = (array, n = 1) => {
  let output = [];

  if (n > array.length) {
    return [];
  }

  for (let i = n; i < array.length; i++) {
    output.push(array[i]);
  }

  return output;
};

console.log(drop([1, 2, 3], 5));
