function order(product, quantity) {
  let price;
  switch (product) {
    case "coffee":
      price = 1.5;
      console.log((price * quantity).toFixed(2));
      break;
    case "water":
      price = 1.0;
      console.log((price * quantity).toFixed(2));
      break;
    case "coke":
      price = 1.4;
      console.log((price * quantity).toFixed(2));
      break;
    case "snacks":
      price = 2.0;
      console.log((price * quantity).toFixed(2));
      break;
  }
}
