/**
 * Finds the intersection of multiple arrays with optional element transformation.
 *
 * @param {...array} arrays - Variable number of arrays to find the intersection of.
 * @param {function} [iterattee] (optional) A function used to transform elements before comparison.
 *
 * @returns {array} A new array containing elements present in all input arrays after transformation (if provided).
 *
 * @throws {TypeError} If any argument except the last (optional iterattee) is not an array.
 */
const intersectionBy = (...arrays) => {
  const iterattee =
    typeof arrays[arrays.length - 1] === "function" ? arrays.pop() : undefined;
  const output = [];

  // Check if all arguments except the last (optional iterattee) are arrays
  for (const arr of arrays) {
    if (!Array.isArray(arr)) {
      throw new TypeError("All arguments except the last must be arrays.");
    }
  }

  const firstArray = arrays[0];

  // Transform elements of the first array using the iterattee (if provided)
  const transformedFirstArray = firstArray.map((element) =>
    iterattee ? iterattee(element) : element
  );

  for (const arr of arrays.slice(1)) {
    const transformedArr = arr.map((element) =>
      iterattee ? iterattee(element) : element
    );
    const intersectionSet = new Set(transformedFirstArray); // Use Set for efficient membership checks

    // Efficiently check for element presence using Set's has method
    for (const element of transformedArr) {
      if (intersectionSet.has(element)) {
        output.push(element);
        intersectionSet.delete(element); // Remove duplicates for subsequent iterations
      }
    }
  }

  return output;
};

module.exports = intersectionBy;
