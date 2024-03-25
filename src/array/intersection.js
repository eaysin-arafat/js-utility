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

module.exports = intersection;
