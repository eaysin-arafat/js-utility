const flattenDeep = (array) => {
  let output = [];

  const flattenArray = (arr) => {
    return arr.reduce(
      (acc, curr) =>
        Array.isArray(curr) ? acc.concat(flattenArray(curr)) : acc.concat(curr),
      []
    );
  };

  return output.concat(flattenArray(array));
};

module.exports = flattenDeep;
