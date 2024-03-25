const sortedIndex = (array, value) => {
  for (index in array) {
    if (array[index] >= value) {
      return index;
    }
  }
};

module.exports = sortedIndex;
