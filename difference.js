const difference = (array, [...value]) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const isThere = value.includes(array[i]);

    if (!isThere) {
      output.push(array[i]);
    }
  }

  return output;
};

console.log(difference([2, 5, 9, 1], [2, 5, 3]));
