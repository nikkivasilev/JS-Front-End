function numberModification(number) {
    let numArray = number.toString().split('').map(element => Number(element))
    let average = calculateAverage(numArray)
    while (average <= 5) {
        numArray.push(9)
        average = calculateAverage(numArray)
    }
    console.log(Number(numArray.join('')))
    function calculateAverage(array) {
        let total = 0;
        let count = 0;

        array.forEach(item => {
            total += item;
            count++;
        });

        return total / count;
    }
}

numberModification(101)