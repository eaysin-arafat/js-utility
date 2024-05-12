/**
 * Joins elements of an array into a string, separated by a specified separator.
 *
 * @param {array} array - The array of elements to join.
 * @param {string} [separator=""] (optional) The string to insert between elements. Defaults to an empty string.
 *
 * @returns {string} A new string containing all elements joined with the separator.
 *
 * @throws {TypeError} If the first argument is not an array.
 */
const join = (array, separator = "") => {
  // Check if the first argument is an array
  if (!Array.isArray(array)) {
    throw new TypeError("The first argument must be an array.");
  }

  let output = "";
  output += array[0];

  for (let i = 1; i < array.length; i++) {
    output += separator;
    output += array[i];
  }

  return output;
};

module.exports = join;
