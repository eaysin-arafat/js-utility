const pullAt = (array, indexes) => {
  const result = [];

  indexes.sort((a, b) => b - a);

  for (const index of indexes) {
    const [removed] = array.splice(index, 1);

    result.push(removed);
  }

  return result;
};

var array = ["a", "b", "c", "d"];

console.log(pullAt(array, [1, 3]));
