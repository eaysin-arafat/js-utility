const sortedUniqBy = (array, iterattee) => {
  const isFunction = typeof iterattee === "function";
  const seen = new Set();

  return array.filter((element) => {
    const key = isFunction ? iterattee(element) : element;

    if (!seen.has(key)) {
      seen.add(key);
      return true;
    }

    return false;
  });
};

module.exports = sortedUniqBy;
