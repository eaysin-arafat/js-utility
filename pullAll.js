const pullAll = (array, values) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    if (!values.includes(array[i])) {
      console.log(array[i]);
      output.push(array[i]);
    }
  }

  return output;
};

var array = ["a", "b", "c", "a", "b", "c"];

console.log(pullAll(array, ["a", "c"]));

// => ['b', 'b']
