/**
 * Removes the specified number of elements from the beginning of an array and returns a new array containing the remaining elements.
 *
 * @param {array} array - The array to remove elements from.
 * @param {number} [n=1] (optional) The number of elements to drop. Defaults to 1.
 *                     If 'n' is negative or greater than the array length, it will be set to 0.
 *
 * @returns {array} A new array containing the elements remaining after dropping the specified number of elements from the beginning.
 */
const drop = (array, n = 1) => {
  // Ensure n is not negative
  n = Math.max(0, n);

  // Use slice for efficient extraction of remaining elements
  return array.slice(n);
};

module.exports = drop;
