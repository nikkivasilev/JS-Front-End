function solve(n, input) {   
    let newArray = input.slice(0, n).reverse()
    console.log(newArray.join(' '));
}
solve(4, [-1, 20, 99, 5])