const compact = (arr) => {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != false || null || 0 || "" || undefined) {
      output.push(arr[i]);
    }
  }

  return output;
};

console.log(compact([0, 1, false, 2, "", 3]));
