function arrayRotations(numbers, rotations) {
  rotations %= numbers.length;
  for (let i = 0; i < rotations; i++) {
    let firstNUm = numbers.shift();
    numbers.push(firstNUm)
  }
  console.log(numbers.join(' '));
}
