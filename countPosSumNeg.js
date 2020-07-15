//https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    let positiveSum = 0;
    let negativeSum = 0;
    for (i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positiveSum += 1;
        } else {
            negativeSum += input[i];
        }
    }
    let output = [positiveSum, negativeSum];
    return output;
}

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(numArray));
