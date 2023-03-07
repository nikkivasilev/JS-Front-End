function addressBook(input) {
    let successful = {}
    for (const meeting of input) {
        let [name, address] = meeting.split(':')
            successful[name] = address

    }
    let sortedNames = Object.keys(successful).sort(
        (nameA, nameB) =>nameA.localeCompare(nameB)
    )


    for (const key of sortedNames) {
        console.log(`${key} -> ${successful[key]}`)
    }

}

addressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd'])