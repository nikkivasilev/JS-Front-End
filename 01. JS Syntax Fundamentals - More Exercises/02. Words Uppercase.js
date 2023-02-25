function wordsUppercase(text) {
  let textArray = text.split(" ");
  let result = [];
  textArray.forEach((word) => {
      result.push(word.replace(/[^a-zA-Z]+/g, '').toUpperCase());
  });

  console.log(result.join(", "));
}

wordsUppercase('Hi, how are you?')