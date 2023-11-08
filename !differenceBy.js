const differenceBy = (array, [...value], callback) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const newArr = value.map((v) => callback(v));
    const isThere = newArr.includes(callback(array[i]));

    if (!isThere) {
      output.push(array[i]);
    }
  }

  return output;
};

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor()));
// console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x"));
