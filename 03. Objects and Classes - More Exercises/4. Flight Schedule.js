function flightSchedule(input) {
    let [flights, canceled, check] = input
    canceled = canceled.map(el => el.split(' ')[0])
    let readyFlights = {}
    flights.forEach(flight => {
        let [code, ...Destination] = flight.split(' ')
        let Status = 'Ready to fly'
        Destination = Destination.join(' ')
        readyFlights[code] = {Destination, Status}
    })
    let canceledFlights = {}
    canceled.forEach(el => {
        if (readyFlights[el]) {
            canceledFlights[el] = readyFlights[el]
            delete readyFlights[el]
            canceledFlights[el][`Status`] = `Cancelled`
        }
    })
    if (check[0] === "Ready to fly") {
        Object.values(readyFlights).forEach(object => console.log(object))
    } else {
        Object.values(canceledFlights).sort((a, b) => a[`Destination`].localeCompare(b[`Destination`])).forEach(object => console.log(object))

    }
}
flightSchedule([["WN269 Delaware","FL2269 Oregon","WN498 Las Vegas","WN3145 Ohio","WN612 Alabama","WN4010 New York","WN1173 California","DL2120 Texas","KL5744 Illinois","WN678 Pennsylvania"],["DL2120 Cancelled","WN612 Cancelled","WN1173 Cancelled","SK430 Cancelled"],["Cancelled"]])


console.log( '\n')
flightSchedule([['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
        ['DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK330 Cancelled'],
        ['Ready to fly']
    ]
)