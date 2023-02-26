function login(info) {
  let username = info.shift();
  let reversedUsername = username.split("").reverse().join("");
  let tries = 0;
  for (el of info) {
    if (reversedUsername === el) {
      console.log(`User ${username} logged in.`);
      break;
    }
    tries += 1;
    if (tries === 4) {
      console.log(`User ${username} blocked!`);
      break;
    }
    console.log("Incorrect password. Try again.");
  }
}
