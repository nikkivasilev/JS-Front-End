function fruit(type, weightG, pricePer) {
    weightKG = weightG / 1000
    price = weightKG * pricePer
    console.log(`I need $${price.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${type}.`);
}