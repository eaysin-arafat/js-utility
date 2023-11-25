const reverse = (array) => {
  const result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
};

var array = [1, 2, 3];

console.log(reverse(array));
