function inArray(array1, array2) {
  let r = [];
  array1.map((string1) => {
    const substring = array2.find((string2) => string2.includes(string1))
    if (substring) r.push(string1);
  })
  return r.sort();
};

const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

const a1 = ["xyz", "live", "strong"];
const a3 = ["live", "strong", "arp"];
const a4 = ["tarp", "mice", "bull"];

console.log(inArray(a1, a2));
console.log(inArray(a3, a2));
console.log(inArray(a4, a2));
