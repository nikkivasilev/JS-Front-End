function solve(startNUm, endNum) {
  let nums = [];
  let sum = 0;
  for (let i = startNUm; i <= endNum; i++) {
    nums.push(i);
    sum += i;
  }
  console.log(nums.join(" "));
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
