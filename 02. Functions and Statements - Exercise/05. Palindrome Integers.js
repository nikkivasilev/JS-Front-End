function palindromeInteger(numbers) {
    for (let number of numbers) {
        if (isPalindrome(number)) {
            console.log(`true`)
        } else {
            console.log(`false`)
        }
    }
    function isPalindrome(number) {
        let arrayNumber = number.toString().split('');
        return arrayNumber.join('') === arrayNumber.reverse().join('')
    }
}

palindromeInteger([123, 323, 421, 121])