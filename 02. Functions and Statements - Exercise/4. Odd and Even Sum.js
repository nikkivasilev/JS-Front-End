function oddAndEvenSum(number) {
    let numbersArray = String(number).split('')
    let even = []
    let odd = []
    numbersArray.forEach(num => {
        if (Number(num) % 2 === 0) {
            even.push(Number(num))
        } else {
            odd.push(Number(num))
        }
    })
    console.log(`Odd sum = ${odd.reduce((a, b) => a + b, 0)}, Even sum = ${even.reduce((a, b) => a + b, 0)}`)
}


oddAndEvenSum(213123123)