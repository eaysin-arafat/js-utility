/**
 * Removes elements from an array at the specified indexes and returns them in the order they were removed.
 *
 * @param {array} array - The array to remove elements from.
 * @param {array<number>} indexes - An array of non-negative integer indexes specifying which elements to remove.
 *   - Elements must be valid indexes within the range of the array.
 *   - Duplicate indexes will result in the element being removed only once.
 *
 * @returns {array} A new array containing the elements that were removed from the original array, preserving the order of removal.
 *
 * @throws {TypeError} If any index in `indexes` is not a number.
 * @throws {RangeError} If any index in `indexes` is negative or outside the bounds of the array.
 */
const pullAt = (array, indexes) => {
  // Input validation for better stability
  if (!Array.isArray(array)) {
    throw new TypeError("The first argument 'array' must be an array.");
  }

  if (
    !Array.isArray(indexes) ||
    indexes.some((index) => typeof index !== "number")
  ) {
    throw new TypeError(
      "The second argument 'indexes' must be an array of numbers."
    );
  }

  const result = [];
  const sortedIndexes = indexes.slice().sort((a, b) => b - a); // Sort a copy to avoid modifying the original indexes array

  for (const index of sortedIndexes) {
    // Validate index within bounds for robustness
    if (index < 0 || index >= array.length) {
      throw new RangeError(
        `Index ${index} is outside the bounds of the array.`
      );
    }

    const removed = array.splice(index, 1)[0]; // Use splice and destructuring to extract the removed element
    result.push(removed);
  }

  return result;
};

module.exports = pullAt;
