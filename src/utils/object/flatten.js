/**
 * Flattens nested arrays up to any depth into a single array.
 *
 * @param {array} array - The array to flatten.
 *
 * @returns {array} A new array containing elements from the original array and all its nested sub-arrays.
 */
const flatten = (array) => {
  const output = [];

  const flattenHelper = (innerArray) => {
    for (const item of innerArray) {
      if (Array.isArray(item)) {
        flattenHelper(item); // Recursive call for nested arrays
      } else {
        output.push(item);
      }
    }
  };

  flattenHelper(array);
  return output;
};

module.exports = flatten;
