const takeRight = (array, n = 1) => {
  const output = [];
  const number = n > array.length ? (n = array.length) : n;
  const breakIndex = array.length - number;

  for (let i = breakIndex; i < array.length; i++) {
    output.push(array[i]);
  }

  return output;
};

module.exports = takeRight;
