let input7 = [1, 2, 3, 4, 5, 6];

function FindEvenNumbers(input) {
  const num = input.length;
  const evenArray = [];
  for (let i = 0; i < num; i++) {
    if (input[i] % 2 === 0) {
      evenArray.push(input[i]);
    }
  }
  return evenArray;
}

const output7 = FindEvenNumbers(input7);
console.log(output7);
