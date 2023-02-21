function solve(month) {   
    if (month < 1 || month > 12) {
        console.log('Error!')
    }
    switch (month) {
    case 1: 
        console.log('January')
    break;
    case 2:
        console.log('February')
    break;
    }
    if (month === 3) {
        console.log('March')
    }
    if (month === 4) {
        console.log('April')
    }
    if (month === 5) {
        console.log('May')
    }
    if (month === 6) {
        console.log('June')
    }
    if (month === 7) {
        console.log('July')
    }
    if (month === 8) {
        console.log('August')
    }
    if (month === 9) {
        console.log('September')
    }
    if (month === 10) {
        console.log('October')
    }
    if (month === 11) {
        console.log('November')
    }
    if (month === 12) {
        console.log('December')
    }
}

solve(1)