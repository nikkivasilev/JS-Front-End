function convertToObject(jsonString) {
    let data = JSON.parse(jsonString)
    for (const dataKey in data) {
        console.log(`${dataKey}: ${data[dataKey]}`)
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')