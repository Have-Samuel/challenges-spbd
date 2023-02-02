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