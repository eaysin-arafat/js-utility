const join = (array, separator) => {
  let output = "";
  output += array[0];

  for (let i = 1; i < array.length; i++) {
    output += separator;
    output += array[i];
  }

  return output;
};

console.log(join(["a", "b", "c"], ","));
