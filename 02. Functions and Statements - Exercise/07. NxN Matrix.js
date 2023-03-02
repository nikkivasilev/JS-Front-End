function matrix(n) {
    let matrix = new Array(n).fill(new Array(n).fill(n))
    matrix.forEach(row => console.log(row.join(' ')))
}


console.log(matrix(2))