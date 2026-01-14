let input3 = "Madam";

function CheckPalindrome(input) {
  const text = input.toLowerCase();
  let revText = "";
  const num = text.length;
  for (let i = num - 1; i >= 0; i--) {
    revText = revText + text[i];
  }
  if (text === revText) {
    return true;
  }
  return false;
}

const output3 = CheckPalindrome(input3);
console.log(output3);
