function crap(x, bags, cap) {
  let result = 'Clean';
  let totalCap = bags * cap;
  let foundDog;
  x.forEach(row => {
    row.forEach(grass => {
      switch (grass) {
        case 'D':
          foundDog = true;
          // result = 'Dog!!';
          break;
        case '@':
          if (totalCap > 0) totalCap -= 1;
          if (totalCap < 1) result = 'Cr@p';
          break;
        default:
          break;
      }
      // if (result === 'Dog!!') return result;
    });
  });
  if (foundDog) return 'Dog!!';
  return result;
};