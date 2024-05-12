/**
 * Removes elements from an array that have matching values based on a comparison function or property with elements in another array.
 *
 * @param {array} array - The array to remove elements from.
 * @param {array} values - The array containing elements to be used for comparison.
 * @param {function(any): any} [iteratee] (optional) A function that receives an element and returns the value to use for comparison. Defaults to the entire element if not a function.
 *
 * @returns {array} A new array containing elements from the 'array' that don't have matching values in the 'values' array based on the comparison function or property.
 */
const pullAllBy = (array, values, iteratee) => {
  // Check if iteratee is a function (optional argument)
  const isFunction = typeof iteratee === "function";

  return array.filter((element) => {
    // Define the value to compare with elements in 'values' based on iteratee
    const compareValue = isFunction ? iteratee(element) : element[iteratee];

    // Use some to check if any element in 'values' satisfies the comparison condition
    return !values.some((value) => {
      // Define the value to compare from 'values' based on iteratee
      const compareValueToRemove = isFunction
        ? iteratee(value)
        : value[iteratee];

      // Check for strict equality between compareValue and compareValueToRemove
      return compareValue === compareValueToRemove;
    });
  });
};

module.exports = pullAllBy;
