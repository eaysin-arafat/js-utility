const flattenDepth = (array, depth = 1) => {
  if (depth === 0) {
    return array;
  }

  const output = [];

  for (const arr of array) {
    if (Array.isArray(arr)) {
      output.push(...flattenDepth(arr, depth - 1));
    } else {
      output.push(arr);
    }
  }

  return output;
};

module.exports = flattenDepth;
