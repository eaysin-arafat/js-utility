const dropRight = (array, n = 1) => {
  let output = [];

  if (n > array.length) {
    return [];
  }

  n = array.length - n;

  for (let i = 0; i < n; i++) {
    output.push(array[i]);
  }

  return output;
};

module.exports = dropRight;
