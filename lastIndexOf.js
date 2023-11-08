const lastIndexOf = (array, value, fromIndex) => {
  for (let i = fromIndex; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }

  return -1;
};

console.log(lastIndexOf([1, 3, 4, 5, 2, 6, 7, 8, 9], 2, 3));
