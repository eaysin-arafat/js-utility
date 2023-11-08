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

const array = [[1], [2, [3, [4]], 5]];
console.log(flattenDepth(array, 3));
