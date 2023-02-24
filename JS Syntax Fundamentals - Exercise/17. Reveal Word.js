// function revealW0rds(words, text) {
//   let wordsToReveal = words.split(", ");
//   let textArray = text.split(" ");

//   textArray.forEach((word) => {
//     if (wordsToReveal.length > 0) {
//       if (word === "*".repeat(wordsToReveal[0].length)) {
//         textArray[textArray.indexOf(word)] = wordsToReveal[0];
//         wordsToReveal.shift();
//       }
//     }
//   });
//   console.log(textArray.join(' '));
// }

function revealWords(words, text) {
  let wordsToReveal = words.split(", ");
  let textArray = text.split(" ");

  for (let i = 0; i < textArray.length; i++) {
    if (wordsToReveal.length === 0) {
      break;
    } else if (textArray[i] === "*".repeat(wordsToReveal[0].length)) {
      textArray[i] = wordsToReveal[0];
      wordsToReveal.shift();
    }
  }
  console.log(textArray.join(" "));
}

// revealW0rds(
//   "great",
//   "softuni is ***** place for learning new programming languages"
// );

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
