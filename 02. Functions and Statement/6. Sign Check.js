// function singCheck(numOne, numTwo, numThree) {
//     let negatives = 0
//     if (numOne < 0) {
//         negatives += 1
//     }
//     if (numTwo < 0) {
//         negatives += 1
//     }
//     if (numThree < 0) {
//         negatives += 1
//     }
//     if (negatives % 2 === 0){
//         return 'Positive'
//     }
//     return 'Negative'
// }

function singCheck(...numbers) {
    return numbers
        .filter((num) => num < 0)
        .length % 2 === 0 ? 'Positive' : 'Negative'
}


console.log(
    singCheck(1, -2 , 3)
)