const slice = (array, start = 0, end = array.length) => {
  const output = [];

  // console.log(i);
  const result = array.filter((element, index) => {
    if (index >= start && index <= end) {
      return null;
    } else {
      output.push(element);
    }
  });

  return output;
};

module.exports = slice;
