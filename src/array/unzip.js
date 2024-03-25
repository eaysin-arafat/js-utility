const unzip = (...arrays) => {
  const output = [];

  for (array of arrays) {
    if (Array.isArray(array)) {
      output.push(array);
    }
  }

  return output;
};

module.exports = unzip;
