const chunk = (arr, num) => {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < num; i++) {
    arr1.push(arr[i]);
  }

  for (let i = num; i < arr.length; i++) {
    arr2.push(arr[i]);
  }

  return (output = [arr1, arr2]);
};

module.exports = chunk;
