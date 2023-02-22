// function solve(string, startindex, count) {
//   let result = [];
//   for (let i = 0; i < count + 1; i++) {
//     if (i >= startindex) {
//       result.push(string[i]);
//     }
//   }

//   console.log(result.join(''));
// }

// solve("ASentence", 1, 8);

function solve(string, startindex, count) {   
    console.log(string.slice(startindex, startindex + count));
}

solve("ASentence", 1, 8);
