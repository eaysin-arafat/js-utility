/**
 * Splits an array into sub-arrays of a specified size.
 *
 * @param {array} arr - The array to split into chunks.
 * @param {number} num (optional) The desired size of each chunk. Defaults to 1.
 *
 * @returns {array} A new array containing sub-arrays of the original array with a maximum length of 'num'.
 *
 * @throws {TypeError} If the argument is not an array.
 */
const chunk = (arr, num = 1) => {
  // Type check to ensure the argument is an array
  if (!Array.isArray(arr)) {
    throw new TypeError("The argument must be an array.");
  }

  // Ensure num is not negative or zero
  if (num <= 0) {
    num = 1;
  }

  const chunks = [];
  for (let i = 0; i < arr.length; i += num) {
    chunks.push(arr.slice(i, i + num));
  }

  return chunks;
};

module.exports = chunk;
