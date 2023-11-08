const intersection = (...array) => {
  const output = [];
  let found = false;

  for (let i = 1; i < array.length; i++) {
    for (arr of array[i]) {
      for (firstArr of array[0]) {
        if (firstArr === arr && !found) {
          output.push(arr);
          found = true;
        }
      }
    }
  }

  return output;
};

console.log(intersection([2, 2, 1], [2, 3], [5, 2, 1]));
