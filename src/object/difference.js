const difference = (array, [...value]) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const isThere = value.includes(array[i]);

    if (!isThere) {
      output.push(array[i]);
    }
  }

  return output;
};

module.exports = difference;
