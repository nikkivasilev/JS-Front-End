function convertToJson(name, lastName, hairColor) {
    let person = {name, lastName, hairColor}
    return JSON.stringify(person)
}