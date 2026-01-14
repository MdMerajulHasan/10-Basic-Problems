let input1 = "Merajul Hasan";

function Reverse(input) {
  const num = input.length;
  let revInput = "";
  for (let i = num - 1; i >= 0; i--) {
    revInput = revInput + input[i];
  }
  return revInput;
}
const output1 = Reverse(input1);
console.log(output1);
