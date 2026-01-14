let input2 = "Programming";

function CountVowels(input) {
  const num = input.length;
  let count = 0;
  for (let i = 0; i < num; i++) {
    if (input[i] === "A" || input[i] === "a") {
      count++;
    } else if (input[i] === "E" || input[i] === "e") {
      count++;
    } else if (input[i] === "I" || input[i] === "i") {
      count++;
    } else if (input[i] === "O" || input[i] === "o") {
      count++;
    } else if (input[i] === "U" || input[i] === "u") {
      count++;
    }
  }
  return count;
}

const output2 = CountVowels(input2);
console.log(output2);
