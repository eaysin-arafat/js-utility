/**
 * Flattens nested arrays up to any depth into a single array.
 *
 * @param {array} array - The array to flatten.
 *
 * @returns {array} A new array containing elements from the original array and all its nested sub-arrays.
 */
const flattenDeep = (array) => {
  /**
   * Recursive helper function to flatten an array.
   *
   * @param {array} innerArray - The array to be flattened (could be the main array or a nested array).
   *
   * @returns {array} A new array containing the flattened elements of the input array.
   */
  const flattenHelper = (innerArray) => {
    return innerArray.reduce((acc, curr) => {
      // If the current element is an array, recursively call flattenHelper to handle nested arrays
      if (Array.isArray(curr)) {
        return acc.concat(flattenHelper(curr));
      } else {
        // If the current element is not an array (primitive value), add it to the accumulator
        return acc.concat(curr);
      }
    }, []);
  };

  // Call the helper function with the original array to initiate flattening
  return flattenHelper(array);
};

module.exports = flattenDeep;
