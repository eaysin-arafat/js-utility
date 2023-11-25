const sortedIndex = (array, value) => {
  for (index in array) {
    if (array[index] >= value) {
      return index;
    }
  }
};

console.log(sortedIndex([30, 50], 40));
console.log(sortedIndex([10, 20, 30, 40, 50], 25));
