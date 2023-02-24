function solve(text) {
  let splittedText = text.split("");
  let result = [];
  while (splittedText.length > 0) {
    let currentWord = "";
    currentWord += splittedText.shift();
    while (
      splittedText.length > 0 &&
      splittedText[0] === splittedText[0].toLowerCase()
    ) {
      currentWord += splittedText.shift();
    }
    result.push(currentWord);
  }
  console.log(result.join(", "));
}
