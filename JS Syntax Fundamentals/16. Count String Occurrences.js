function solve(text, word) {
  let result = 0;
  for (let el of text.split(" ")) {
    if (el === word) {
      result += 1;
      
    }
  }

  console.log(result);
}

solve("This is a word and it also is a sentence", "is");
