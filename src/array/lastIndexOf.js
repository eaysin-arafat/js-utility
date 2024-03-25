const lastIndexOf = (array, value, fromIndex) => {
  for (let i = fromIndex; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }

  return -1;
};

module.exports = lastIndexOf;
