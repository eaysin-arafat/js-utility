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

const array = [1];
const other = concat(array, 2, [3], [5], [[4]]);
console.log(other);
