function passwordValidator(password) {
    let valid = true
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters")
        valid = false
    }
    const isAlphaNum = (password) => /^[A-Za-z0-9]+$/g.test(password)
    const minTwoDigit = (password) => [...password.matchAll(/\d/g)].length >= 2;

    if (!isAlphaNum(password)) {
        console.log("Password must consist only of letters and digits")
        valid = false
    }

    if (!minTwoDigit(password)) {
        console.log("Password must have at least 2 digits")
        valid = false
    }

    if (valid) {
        console.log("Password is valid")
    }

}