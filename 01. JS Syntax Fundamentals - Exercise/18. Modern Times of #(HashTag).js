function modernTimes(text) {
  let words = text.split(" ");
  let result = [];
  for (const word of words) {
    if (word.startsWith("#") && word.length > 1 && checkWord(word)) {
      result.push(word.slice(1));
    }
  }

  console.log(result.join('\n'));

  function checkWord(myWord) {
    let wordLower = myWord.toLowerCase().slice(1);
    let isValid = true;

    for (const symbol of wordLower) {
        let asciSymbol = symbol.charCodeAt(0)
      if (!(asciSymbol >= 97 && asciSymbol <= 122)) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }
}
