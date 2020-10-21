const list1 = [{ "firstName": "Maia", "lastName": "S.", "country": "Tahiti", "continent": "Oceania", "age": 28, "language": "Clojure" }, { "firstName": "Liam", "lastName": "D.", "country": "Faroe Islands", "continent": "Europe", "age": 28, "language": "Python" }, { "firstName": "Fatima", "lastName": "K.", "country": "Saudi Arabia", "continent": "Asia", "age": 21, "language": "Clojure" }, { "firstName": "Shufen", "lastName": "L.", "country": "Taiwan", "continent": "Asia", "age": 35, "language": "PHP" }, { "firstName": "Sou", "lastName": "B.", "country": "Japan", "continent": "Asia", "age": 43, "language": "PHP" }];

function getFirstPython(list) {
  const copy = JSON.parse(JSON.stringify(list));
  return copy.reduce((acc, curV, curI, arr) => {
    if (curV.language === 'Python') {
      acc = `${curV.firstName}, ${curV.country}`;
      arr.splice(1);
    }
    return acc;
  }, 'There will be no Python developers');
}

console.log(getFirstPython(list1));
