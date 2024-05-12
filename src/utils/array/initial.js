/**
 * Creates a new array containing all elements except the last one from the input array.
 *
 * @param {array} array - The array to process.
 *
 * @returns {array} A new array containing all elements except the last one from the input array.
 *
 * @throws {TypeError} If the argument is not an array.
 */
const initial = (array) => {
  // Check if the input is a valid array
  if (!Array.isArray(array)) return;

  const output = [];
  for (let i = 0; i < array.length - 1; i++) {
    output.push(array[i]);
  }
  return output;
};

module.exports = initial;
