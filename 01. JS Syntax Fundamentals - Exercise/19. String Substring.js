function stringSubstring(word, text) {
  let wordLowered = word.toLowerCase();
  let textLowered = text.toLowerCase().split(' ');
  if (textLowered.includes(wordLowered)) {
    return word;
  }

  return `${word} not found!`
}
