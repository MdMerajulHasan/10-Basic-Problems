let input6 = [1, 2, 3, 4];

function SumOfAllNum(input) {
  const num = input.length;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum = sum + input[i];
  }
  return sum;
}

const output6 = SumOfAllNum(input6);
console.log(output6);
