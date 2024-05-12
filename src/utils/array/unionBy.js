/**
 * Finds the union of elements from multiple arrays, removing duplicates based on a custom comparison function or property.
 *
 * @param {...(array|function)} arguments - An arbitrary number of arrays and an optional comparison function.
 *   - The last argument can be a function used for custom comparison.
 *   - All other arguments must be arrays.
 *
 * @returns {array} A new array containing the unique elements from all input arrays based on the comparison function or property.
 *
 * @throws {TypeError} If any argument except the last is not an array.
 */

const unionBy = (...arguments) => {
  const arrays = [];
  const iteratee =
    arguments.length > 1 &&
    typeof arguments[arguments.length - 1] === "function"
      ? arguments[arguments.length - 1]
      : false;
  const iterateeSet = new Set();
  const originalArray = [];

  // Validate that all arguments except the last (potential iteratee) are arrays
  for (let i = 0; i < arguments.length - (iteratee ? 1 : 0); i++) {
    if (!Array.isArray(arguments[i])) {
      throw new TypeError("All arguments except the last must be arrays.");
    }
    arrays.push(arguments[i]);
  }

  for (const array of arrays) {
    for (const element of array) {
      const iterateeValue = iteratee ? iteratee(element) : element;

      if (!iterateeSet.has(iterateeValue)) {
        iterateeSet.add(iterateeValue);
        originalArray.push(element);
      }
    }
  }

  return originalArray;
};

module.exports = unionBy;
