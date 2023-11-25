const remove = (array, predicate) => {
  const isFunction = typeof predicate === "function";

  if (!isFunction) {
    return array;
  }

  return (resultElement = array.filter((element) => {
    return predicate(element);
  }));
};

var array = [1, 2, 3, 4];
var evens = remove(array, function (n) {
  return n % 2 == 0;
});

console.log(evens);
