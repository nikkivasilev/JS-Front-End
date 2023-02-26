function spiceFlow(yeld) {
  let totalExtract = 0;
  let days = 0;
  while (yeld >= 100) {
    days += 1;
    totalExtract += yeld;
    if (totalExtract >= 26) {
      totalExtract -= 26;
    }
    yeld -= 10;
  }
  if (totalExtract >= 26) {
    totalExtract -= 26;
  }

  console.log(days);
  console.log(totalExtract);
}

spiceFlow(450);
