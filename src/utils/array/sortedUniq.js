/**
 * Removes duplicate elements from a sorted array and returns a new array containing unique elements.
 *
 * @param {array} array - The sorted array to remove duplicates from (ascending order assumed).
 *
 * @returns {array} A new array containing only the unique elements from the original array.
 */
const sortedUniq = (array) => {
  // Use Set to efficiently store and retrieve unique values
  return new Set(array);
};

module.exports = sortedUniq;
