const remove = (array, predicate) => {
  const isFunction = typeof predicate === "function";

  if (!isFunction) {
    return array;
  }

  return (resultElement = array.filter((element) => {
    return predicate(element);
  }));
};

module.exports = remove;
