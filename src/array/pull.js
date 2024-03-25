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

module.exports = pull;
