const take = (array, n = 1) => {
  const output = [];
  const number = n > array.length ? (n = array.length) : n;

  for (let i = 0; i < number; i++) {
    output.push(array[i]);
  }

  return output;
};

module.exports = take;
