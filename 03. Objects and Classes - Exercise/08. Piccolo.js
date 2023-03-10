function parkingLot(input) {
    let parked = []
    for (const el of input) {
        let [command, plate] = el.split(', ')
        if (command === 'IN' && !parked.includes(plate)) {
            parked.push(plate)
        } else if (command === 'OUT') {
            parked = parked.filter(car => car !== plate)
        }
    }
    if (parked.length > 0) {
        // console.log(parked.sort((a, b) => Number(a.slice(2, 6)) - Number(b.slice(2, 6))).join('\n'))
        console.log(parked.sort((a, b) => a.localeCompare(b)).join('\n'))
    } else {
        console.log(`Parking Lot is Empty`)
    }
}

parkingLot(
['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])

parkingLot(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'OUT, CA1234TA'])