/**
 * Flattens nested arrays up to a specified depth into a single array.
 *
 * @param {array} array - The array to flatten.
 * @param {number} depth (optional) - The maximum depth of nesting to flatten. Defaults to 1.
 *
 * @returns {array} A new array containing elements from the original array up to the specified depth.
 */
const flattenDepth = (array, depth = 1) => {
  const flattenHelper = (innerArray, currentDepth) => {
    if (currentDepth === 0) {
      return innerArray;
    }
    const output = [];
    for (const item of innerArray) {
      if (Array.isArray(item) && currentDepth > 0) {
        output.push(...flattenHelper(item, currentDepth - 1));
      } else {
        output.push(item);
      }
    }
    return output;
  };

  return flattenHelper(array, depth);
};

module.exports = flattenDepth;
