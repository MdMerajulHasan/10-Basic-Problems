const input5 = [1, 2, 2, 3, 4, 4];

function RemoveDuplicates(input) {
  const num = input.length;
  const uniqueArray = [];
  for (let i = 0; i < num; i++) {
    if (!uniqueArray.includes(input[i])) {
      uniqueArray.push(input[i]);
    }
  }
  return uniqueArray;
}

const output5 = RemoveDuplicates(input5);
console.log(output5);
