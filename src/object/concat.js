const concat = (array, ...values) => {
  let output = array;

  const isPushArray = (arr) => {
    return arr.reduce(
      (acc, curr) =>
        Array.isArray(curr) ? acc.concat(isPushArray(curr)) : acc.concat(curr),
      []
    );
  };

  const value = isPushArray(values);

  return output.concat(value);
};

module.exports = concat;
