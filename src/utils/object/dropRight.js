/**
 * Removes the specified number of elements from the end of an array and returns a new array containing the remaining elements.
 *
 * @param {array} array - The array to remove elements from.
 * @param {number} [n=1] (optional) The number of elements to drop. Defaults to 1.
 *                     If 'n' is negative, it will be set to 0.
 *
 * @returns {array} A new array containing the elements remaining after dropping the specified number of elements from the end.
 */
const dropRight = (array, n = 1) => {
  // Ensure n is not negative
  n = Math.max(0, n);

  // Use slice for efficient extraction of remaining elements from the beginning
  return array.slice(0, -n);
};

module.exports = dropRight;
