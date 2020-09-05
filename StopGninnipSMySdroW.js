function spinWords(string) {
  const arrayOfStrings = string.split(' ');

  const newArray = arrayOfStrings.map((word) => {
    if (word.length < 5) return word;
    let invertedWord = '';
    for (let i = word.length; i > 0; i -= 1) {
      invertedWord += word[i - 1];
    }
    return invertedWord;
  });

  const finalString = newArray.join(' ');

  return finalString;
}
