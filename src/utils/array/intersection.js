/**
 * Finds the intersection of multiple arrays.
 *
 * @param {...array} arrays - Variable number of arrays to find the intersection of.
 *
 * @returns {array} A new array containing the elements present in all input arrays.
 *
 * @throws {TypeError} If any argument is not an array.
 */
const intersection = (...arrays) => {
  // Check if all arguments are arrays
  for (const arr of arrays) {
    if (!Array.isArray(arr)) {
      throw new TypeError("All arguments must be arrays.");
    }
  }

  // Convert the first array to a Set
  const set = new Set(arrays[0]);

  // Use reduce to efficiently intersect subsequent arrays with the Set
  return arrays.slice(1).reduce((intersection, currentArray) => {
    return new Set(
      [...intersection].filter((element) => currentArray.includes(element))
    );
  }, set);
};

module.exports = intersection;
