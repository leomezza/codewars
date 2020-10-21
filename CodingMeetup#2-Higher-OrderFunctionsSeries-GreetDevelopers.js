const list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

function greetDevelopers(list) {
  return list.reduce((acc, curV) => {
    curV.greeting = `Hi ${curV.firstName}, what do you like the most about ${curV.language}?`;
    acc.push(curV);
    return acc;
  }, []);
}

console.log(greetDevelopers(list1));
