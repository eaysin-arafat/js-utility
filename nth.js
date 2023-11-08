const nth = (array, n = 0) => {
  if (n >= 0) {
    for (let i = 0; i < array.length; i++) {
      if (i === n) {
        return array[i];
      }
    }
  } else if (n <= 0) {
    return array[array.length + n];
  }
};

var array = ["a", "b", "c", "d"];

console.log(nth(array, 1));
// => 'b'

console.log(nth(array, -2));
// => 'c';
