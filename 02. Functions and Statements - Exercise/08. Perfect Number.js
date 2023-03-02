function perfectNum(num) {
    if(num === 1) {
        return `It's not so perfect.`;
    }
    let sum = 1;
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0) {
            sum = sum + i + num / i; if(sum > num) {
                return `It's not so perfect.`;
            }
        }
    }
    if (sum === num) {
        return `We have a perfect number!`
    } else {
        return `It's not so perfect.`
    }

}