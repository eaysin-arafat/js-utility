const fill = (array, value, start = 0, end = array.length) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    if (i >= start && i < end) {
      const fillValue = (array[i] = value);
      output.push(fillValue);
    } else {
      output.push(array[i]);
    }
  }

  return output;
};

module.exports = fill;
