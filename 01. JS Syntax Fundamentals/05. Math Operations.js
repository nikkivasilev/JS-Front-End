function solve(numOne, numTwo, operation) {   
    if (operation === '+') {
        console.log(numOne + numTwo)
    } if (operation === '-') {
        console.log(numOne - numTwo)
    } if (operation === '*') {
        console.log(numOne * numTwo)
    } if (operation === '**') {
        console.log(numOne ** numTwo)
    } if (operation === '/') {
        console.log(numOne / numTwo)
    } if (operation === '%') {
        console.log(numOne % numTwo)
    } 
}

solve(4, 5, '+')