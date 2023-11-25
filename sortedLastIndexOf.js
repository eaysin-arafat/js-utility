const sortedLastIndexOf = (array, value) => {
  for (let i = array.length; i > 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
};

console.log(sortedLastIndexOf([4, 5, 5, 5, 6], 5));
// => 1
