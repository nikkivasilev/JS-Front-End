function solve(input) {
  let odd = [];
  let oddSum = 0;
  let even = [];
  let evenSum = 0;
  for (let num of input) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  for (let num of odd) {
    oddSum += num
  }

  for (let num of even) {
    evenSum += num
}
    console.log(evenSum - oddSum);
}
