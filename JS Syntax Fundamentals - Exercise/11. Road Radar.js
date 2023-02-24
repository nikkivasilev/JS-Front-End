function roadRadar(speed, speedZone) {
  let allowedSpeed = 0;
  let status;
  switch (speedZone) {
    case "motorway":
      allowedSpeed = 130;
      difference = speed - allowedSpeed;
      if (speed <= allowedSpeed) {
        return `Driving ${speed} km/h in a ${allowedSpeed} zone`;
      } else if (difference >= 0 && difference <= 20) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - speeding`;
      } else if (difference > 20 && difference <= 40) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - excessive speeding`;
      } else {
        return `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - reckless driving`;
      }
      break;

    case "interstate":
      allowedSpeed = 90;
      difference = speed - allowedSpeed;
      if (speed <= allowedSpeed) {
        return `Driving ${speed} km/h in a ${allowedSpeed} zone`;
      } else if (difference >= 0 && difference <= 20) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - speeding`;
      } else if (difference > 20 && difference <= 40) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - excessive speeding`;
      } else {
        return `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - reckless driving`;
      }
      break;
    case "city":
      allowedSpeed = 50;
      difference = speed - allowedSpeed;
      if (speed <= allowedSpeed) {
        return `Driving ${speed} km/h in a ${allowedSpeed} zone`;
      } else if (difference >= 0 && difference <= 20) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - speeding`;
      } else if (difference > 20 && difference <= 40) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - excessive speeding`;
      } else {
        return `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - reckless driving`;
      }
      break;
    case "residential":
      allowedSpeed = 20;
      difference = speed - allowedSpeed;
      if (speed <= allowedSpeed) {
        return `Driving ${speed} km/h in a ${allowedSpeed} zone`;
      } else if (difference >= 0 && difference <= 20) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - speeding`;
      } else if (difference > 20 && difference <= 40) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - excessive speeding`;
      } else {
        return `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - reckless driving`;
      }
      break;
  }
}
console.log(
roadRadar(90, "city")
)