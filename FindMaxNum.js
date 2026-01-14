const input4 = [5, 1, 9, 3];

function FindMaxNum(input) {
  const num = input.length;
  let maxNum = input[0];
  for (let i = 1; i < num; i++) {
    if (input[i] > maxNum) {
      maxNum = input[i];
    }
  }
  return maxNum;
}

const output4 = FindMaxNum(input4);
console.log(output4);
