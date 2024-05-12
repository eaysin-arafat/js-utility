/**
 * Takes an array of arrays and transforms it into an array of sub-arrays, where each sub-array represents elements at the same index from the original arrays.
 * This is essentially the inverse of the `zip` function.
 *
 * @param {...array} arrays - An arbitrary number of arrays.
 *
 * @returns {array[]} A new array containing sub-arrays of elements from corresponding indexes of the input arrays.
 *                 The length of each sub-array will be the minimum length of the input arrays.
 */
const unzip = (...arrays) => {
  // Ensure all arguments are arrays and get the minimum length
  const minLength = Math.min(
    ...arrays.map((arr) => (Array.isArray(arr) ? arr.length : 0))
  );

  const output = [];
  for (let i = 0; i < minLength; i++) {
    output.push([]);
    for (const arr of arrays) {
      if (Array.isArray(arr) && arr[i] !== undefined) {
        output[i].push(arr[i]);
      }
    }
  }

  return output;
};

module.exports = unzip;
