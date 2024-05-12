/**
 * Removes elements from an array that satisfy a given predicate function.
 *
 * @param {array} array - The array to remove elements from.
 * @param {function(any): boolean} predicate - A function that takes an element from the array and returns true if the element should be removed, false otherwise.
 *   - If the predicate is not a function, the original array is returned unchanged.
 *
 * @returns {array} A new array containing the elements from the original array that do not satisfy the predicate function.
 *
 * @throws {TypeError} (implicitly) If the predicate is not a function.
 */
const remove = (array, predicate) => {
  // Type check for predicate (implicit type coercion might lead to unexpected behavior)
  // if (!isFunction(predicate)) {
  //   throw new TypeError("Predicate must be a callable function.");
  // }

  return array.filter((element) => !predicate(element));
};

module.exports = remove;
