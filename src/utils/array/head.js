const getFirstElement = (array) => {
  if (!Array.isArray(array) || array.length === 0) return -1;
  return array[0];
};

module.exports = getFirstElement;
