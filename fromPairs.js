const fromPairs = (array) => {
  const output = Object.fromEntries(array);

  return output;
};

const array = [
  ["a", 1],
  ["b", 2],
];

console.log(fromPairs(array));
