/**
 * Finds the union of all elements from multiple arrays, removing duplicates.
 *
 * @param {...array} arrays - An arbitrary number of arrays to find the union of.
 *
 * @returns {array} A new array containing the unique elements from all input arrays.
 *
 * @throws {TypeError} If any argument is not an array.
 */
const union = (...arrays) => {
  // Check if all arguments are arrays (implicit type coercion might lead to unexpected behavior)
  if (!arrays.every(Array.isArray)) {
    throw new TypeError("All arguments must be arrays.");
  }

  const seen = new Set();

  for (const array of arrays) {
    for (const element of array) {
      seen.add(element);
    }
  }

  return [...seen];
};

module.exports = union;
