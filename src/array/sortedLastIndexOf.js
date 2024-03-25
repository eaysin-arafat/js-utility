const sortedLastIndexOf = (array, value) => {
  for (let i = array.length; i > 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
};

module.exports = sortedLastIndexOf;
