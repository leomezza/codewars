function partsSums(ls) {
  if (ls.length < 1) return [0];
  const initialSum = ls.reduce((acc, cur) => acc + cur);
  const sums = [initialSum];
  let sum = initialSum;
  for (let i = 0; i < ls.length; i += 1) {
    sum -= ls[i];
    sums.push(sum);
  }
  return sums;
}

console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));
