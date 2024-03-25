const differenceBy = (array, [...value], callback) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const newArr = value.map((v) => callback(v));
    const isThere = newArr.includes(callback(array[i]));

    if (!isThere) {
      output.push(array[i]);
    }
  }

  return output;
};

module.exports = differenceBy;
