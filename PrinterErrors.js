function printerError(s) {
  let numerator = 0;
  const regex = /[n-z]/gi;
  for (i = 0; i < s.length; i++) {
    if (s[i].match(regex) !== null) numerator++;
  }
  const denominator = s.length;
  return `${numerator}/${denominator}`;
};

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));