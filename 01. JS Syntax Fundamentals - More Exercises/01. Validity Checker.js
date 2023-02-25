function checkDistance(x1, y1, x2, y2) {
    function isValidDistance(x, y) {
      return Number.isInteger(Math.sqrt(x * x + y * y));
    }
    if (isValidDistance(x1, y1)) {
      console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (isValidDistance(x2, y2)) {
      console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
      console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (isValidDistance(x2 - x1, y2 - y1)) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  }