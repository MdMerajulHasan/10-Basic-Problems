let input8 = "hello  world";

function Capital1stLetter(input) {
  const words = input.split(" ");
  const num = words.length;

  for (let i = 0; i < num; i++) {
    const updatedWord =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    words[i] = updatedWord;
  }

  let updatedText = "";
  for (let i = 0; i < num; i++) {
    updatedText = updatedText + " " + words[i];
  }
  return updatedText;
}

const output8 = Capital1stLetter(input8);
console.log(output8);
