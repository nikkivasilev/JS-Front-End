function carWash(commandArray) {
    let clean = 0
    commandArray.forEach(command => {
        switch (command) {
            case 'soap':
                clean += 10
                break;
            case 'water':
                clean *= 1.2
                break;
            case 'vacuum cleaner':
                clean *= 1.25
                break;
            case 'mud':
                clean *= 0.9
                break;
        }
    })
    console.log(`The car is ${clean.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])