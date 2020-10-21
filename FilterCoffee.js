const beanPrices = [7, 3, 23, 9, 14, 20, 7];

function search(budget, prices) {
  function compareNumbers(a, b) {
    return a - b;
  }
  return prices.filter(price => price <= budget).sort(compareNumbers).toString();
}

console.log(search(14, beanPrices));
