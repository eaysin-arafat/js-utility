const tail = (array) => {
  const output = array;
  output.shift();

  return output;
};

console.log(tail([1, 2, 3]));
// => [2, 3]
