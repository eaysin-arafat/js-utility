const indexOf = (array, value, fromIndex = 0) => {
  for (let i = fromIndex; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }

  return -1;
};

console.log(indexOf([1, 2, 1, 2], 2));
