/**
 * Reverses the order of elements in an array.
 *
 * @param {array} array - The array to be reversed.
 *
 * @returns {array} A new array containing the elements of the original array in reversed order.
 */
const reverse = (array) => {
  // Create a new result array to avoid modifying the original array
  const result = [];

  // Iterate through the original array in reverse order
  for (let i = array.length - 1; i >= 0; i--) {
    // Push elements from the original array to the result array in reverse order
    result.push(array[i]);
  }

  // Return the new array containing the reversed elements
  return result;
};

module.exports = reverse;
