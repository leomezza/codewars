function count(string) {
  return string.split("").reduce((result, currentValue) => {
    if (result[currentValue]) {
      result[currentValue]++
    } else {
      result[currentValue] = 1;
    }
    return result;
  }, {});
}
