function logicalColors(x, y) {
  if (x && !y) return 'Blue'
  if (x) return 'Red';
  if (!y) return 'Yellow';
  return 'Purple'
};
logicalColors();

// [4,2,500,7,984,12,93,70,63,669,100,2046];
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