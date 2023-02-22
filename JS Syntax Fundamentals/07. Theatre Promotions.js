function solve(day, age) {
  let result;
  if (day === "Weekday") {
    if (0 <= age && age <= 18) {
        result = "12$";
      }
      if (age > 18 && age <= 64) {
        result = "18$";
      }
      if (age > 64 && age <= 122) {
        result = "12$";
      }
  }
  if (day === "Weekend") {
    if (0 <= age && age <= 18) {
        result = "15$";
      }
      if (age > 18 && age <= 64) {
        result = "20$";
      }
      if (age > 64 && age <= 122) {
        result = "15$";
      }
  }
  if (day === "Holiday") {
    if (0 <= age && age <= 18) {
      result = "5$";
    }
    if (age > 18 && age <= 64) {
      result = "12$";
    }
    if (age > 64 && age <= 122) {
      result = "10$";
    }
  }
  if (age < 0 || age > 122) {
    result = `Error!`;
  }

  console.log(result);
}

solve(
  "Weekday",

  42
);

solve("Holiday", -12);

solve('Holiday', 15)