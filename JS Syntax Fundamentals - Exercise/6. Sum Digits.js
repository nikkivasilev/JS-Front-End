function solve(inputNum) {
  let nums = `${inputNum}`.split("");
  let result = 0;
  while (inputNum) {
    result += inputNum % 10;
    inputNum = Math.floor(inputNum / 10);
  }
  console.log(result);
}

solve(231);
