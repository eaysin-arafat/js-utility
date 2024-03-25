const flatten = (array) => {
  let output = [];

  for (arr of array) {
    if (typeof arr !== "object") {
      output.push(arr);
    } else if (typeof arr === "object") {
      for (v of arr) {
        output.push(v);
      }
    }
  }

  return output;
};

module.exports = flatten;
