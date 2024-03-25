const union = (...arrays) => {
  const seen = new Set();

  for (array of arrays) {
    const isArray = typeof array === "object";

    if (isArray) {
      for (arr of array) {
        seen.add(arr);
      }
    }
  }

  return [...seen];
};

module.exports = union;
