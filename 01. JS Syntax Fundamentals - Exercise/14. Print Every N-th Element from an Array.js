function everyNth(numbers, step) {
    let result  =[];
    for (let i = 0; i < numbers.length; i+=step) {
        result.push(numbers[i])
    }


    return result
}