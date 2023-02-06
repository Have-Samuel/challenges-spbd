function logicalColors(x, y) {
  if (x && !y) return 'Blue'
  if (x) return 'Red';
  if (!y) return 'Yellow';
  return 'Purple'
};
logicalColors();

// [4,2,500,7,984,12,93,70,63,669,100,2046];
// num: 669
// maxNum: 669
function max(arr) {
  let maxNum = arr[0];
  for (let num of arr) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}
max();

// input => 'IW4nt 2 Br3ak Free'
// output => Wnt Brak Fr'.
function removeNumbers(str) {
  let newStr = '';
  for (let char of str) {
    if (!['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(char)) {
      newStr += char;
    }
  }
  return newStr;
}

// [1,2,3,4,5,6,7,8,9,10]
// return [2,4,6,8,10]
function onlyEven(arr) {
  const evens = [];
  for (let num of arr) {
    if (num % 2 === 0) { // if it's even
      evens.push(num);
    }
  }
  return evens;
}
onlyEven();

// 'giant sequoia' => true = 0;
// 'hello world' => false = 0;
// Vowels => 'a, e, i, o, u'
// Method - 1
function containsEveryVowel(str) {
  // if (!str === 'a') {
  //   return false
  // }
  // if (!str === 'e') {
  //   return false;
  // }
  // if (!str === 'i') {
  //   return false;
  // }
  // if (!str === 'o') {
  //   return false;
  // }
  // if (!str === 'u') {
  //   return false;
  // }
  // return true;
}
// Method - 2
function containsEveryVowel(str) {
  let vowels = 'aeiou';
  for (let vowel of vowels) {
    if (!str.includes(vowel)) return false;
  }
  return true;
}

// VowelFrequency
function vowelFrequency(str) {
  const result = {};
  const vowels = 'aeiou';

  for (let char in str) {
    if (vowels.includes(char)) {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  let returnStr = '';
  for (let key in result) {
    returnStr += key + result[key];
  }
  return returnStr;
}