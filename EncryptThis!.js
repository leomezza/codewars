const encryptThis = function (text) {
  const wordsArray = text.split(' ');
  const cryptWordsArray = wordsArray.map((word) => {
    const firstASCII = word.charCodeAt(0);
    if (word.length === 1) return firstASCII;
    const lastLetter = word[word.length - 1];
    if (word.length === 2) return firstASCII + lastLetter;
    const secondLetter = word[1];
    const remainingChars = word.substring(2, word.length - 1);
    return firstASCII + lastLetter + remainingChars + secondLetter;
  });

  return cryptWordsArray.join(" ");
};

console.log(encryptThis("A"));
console.log(encryptThis("A wise old owl lived in an oak"));
console.log(encryptThis("The more he saw the less he spoke"));
console.log(encryptThis("The less he spoke the more he heard"));
console.log(encryptThis("Why can we not all be like that wise old bird"));
console.log(encryptThis("Thank you Piotr for all your help"));
