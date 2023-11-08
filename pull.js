const pull = (...arguments) => {
  const output = [];

  for (value of arguments[0]) {
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] !== value) {
        output.push(value);
      }
    }
  }

  return output;
};

var array = ["a", "b", "c", "a", "b", "c"];

console.log(pull(array, "a", "c"));
