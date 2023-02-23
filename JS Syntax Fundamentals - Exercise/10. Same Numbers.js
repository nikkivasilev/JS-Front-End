function solve(inputNum) {
  let nums = `${inputNum}`.split("");
  let furstNum = Number(nums[0]);
  let result = 0;
  let allSame = "true";
  for (let stringNum of nums) {
    let intgrNum = Number(stringNum);
    result += intgrNum;
    if (furstNum !== intgrNum) {
      allSame = "false";
    }
  }
  console.log(allSame);
  console.log(result);
}
