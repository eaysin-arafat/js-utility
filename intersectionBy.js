const intersectionBy = (...arrays) => {
  const output = [];
  const iterattee = arrays[arrays.length - 1];
  let found = false;

  for (let i = 1; i < arrays.length - 1; i++) {
    for (arr of arrays[i]) {
      for (firstArray of arrays[0]) {
        const value1 =
          typeof iterattee === "function" ? iterattee(firstArray) : firstArray;

        const value2 = typeof iterattee === "function" ? iterattee(arr) : arr;

        if (typeof value1 === "object" && typeof value2 === "object") {
          const objKeys1 = Object.keys(value1).sort();
          const objKeys2 = Object.keys(value1).sort();

          objKeys1.every((key, index) => {
            const objValue1 = value1[key];
            const objValue2 = value2[objKeys2[index]];

            if (objValue1 === objValue2) {
              output.push(value1);
            }
          });
        } else {
          if (value1 === value2 && !found) {
            output.push(firstArray);
            found = true;
          }
        }
      }
    }
  }

  return output;
};

console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x"));
