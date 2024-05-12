/**
 * Finds the difference between an array and another iterable, returning elements present in the first array but not the second.
 *
 * @param {array} array - The array to find the difference from.
 * @param {...any} values - An arbitrary number of values or iterables (like arrays) to compare against.
 *
 * @returns {array} A new array containing elements from the first array that are not present in any of the provided iterables.
 */
const difference = (array, ...values) => {
  // Convert arguments to a Set for efficient lookups
  const valueSet = new Set(values);

  // Use filter to efficiently remove elements present in the Set
  return array.filter((element) => !valueSet.has(element));
};

module.exports = difference;
