function phoneBook(numbers) {
    let result = {}
    for (const number of numbers) {
        let [person, phoneNumber] = number.split(' ')
            result[person] = phoneNumber
    }
    for (const [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value}`)
    }

}

phoneBook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344'])