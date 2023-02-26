function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let total = 0;
  total += Math.floor(lostFights / 2) * helmetPrice;
  total += Math.floor(lostFights / 3) * swordPrice;
  total += Math.floor(lostFights / 6) * shieldPrice;
  total += Math.floor(lostFights / 12) * armorPrice;


  console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
