const unionBy = (...arguments) => {
  let iteratee;
  const orginalArray = [];
  const iterateeSet = new Set();

  if (typeof arguments[arguments.length - 1] === "function") {
    arrays = arguments.slice(0, -1);
    iteratee = arguments[arguments.length - 1];
  } else {
    arrays = arguments;
    iteratee = false;
  }

  for (arg of arguments) {
    if (Array.isArray(arg)) {
      for (const element of arg) {
        const iterateeValue = iteratee ? iteratee(element) : element;

        if (!iterateeSet.has(iterateeValue)) {
          iterateeSet.add(iterateeValue);
          orginalArray.push(element);
        }
      }
    }
  }

  return orginalArray;
};

module.exports = unionBy;
