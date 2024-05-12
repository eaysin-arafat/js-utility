/**
 * Finds the last index of a value within an array, searching backward from a specified index.
 * This function mimics the behavior of the native `lastIndexOf` method.
 *
 * @param {array} array - The array to search in.
 * @param {*} value - The value to search for.
 * @param {number} fromIndex (optional) - The index at which to begin the search. Defaults to 0.
 *
 * @returns {number} The index of the last matching element, or -1 if not found.
 */
const lastIndexOf = (array, value, fromIndex = 0) => {
  // Check if the input is a valid array
  if (!Array.isArray(array)) {
    throw new TypeError("The first argument must be an array.");
  }

  for (let i = fromIndex; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }

  return -1;
};

module.exports = lastIndexOf;
