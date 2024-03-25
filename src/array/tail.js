const tail = (array) => {
  const output = array;
  output.shift();

  return output;
};

module.exports = tail;
