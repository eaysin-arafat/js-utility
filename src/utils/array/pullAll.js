/**
 * Removes elements from an array that are present in another array (values).
 *
 * @param {array} array - The array to remove elements from.
 * @param {array} values - The array containing elements to remove from the 'array'.
 *
 * @returns {array} A new array containing elements from the 'array' that are not present in the 'values' array.
 *
 * @throws {TypeError} (implicitly) If any argument is not an array.
 */
const pullAll = (array, values) => {
  // Check if arguments are arrays (implicit type coercion might lead to unexpected behavior)
  // if (!Array.isArray(array) || !Array.isArray(values)) {
  //   throw new TypeError("Both arguments must be arrays.");
  // }

  const output = [];

  for (let i = 0; i < array.length; i++) {
    if (!values.includes(array[i])) {
      // Remove the console.log if it's not intended behavior
      output.push(array[i]);
    }
  }

  return output;
};

module.exports = pullAll;
