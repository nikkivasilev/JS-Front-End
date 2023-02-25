function cooking(numberAsString, ...operations) {
  let number = Number(numberAsString);

  operations.forEach((operation) => {
    switch (operation) {
      case "chop":
        number /= 2;
        break;
      case "dice":
        number = Math.sqrt(number);
        break;
      case "spice":
        number++;
        break;
      case "bake":
        number *= 3;
        break;
      case "fillet":
        number *= 0.8;
        break;
    }
    console.log(number);
  });
}
