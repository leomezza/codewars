function allNonConsecutive(arr) {
  let result = [];
  if (arr.length < 2) return result;
  for (let index = 0; index < arr.length - 1; index++) {
    const element = arr[index];
    if (element + 1 !== arr[index + 1]) {
      let obj = { i: index + 1, n: arr[index + 1] };
      result.push(obj);
    };
  }
  return result;
}
