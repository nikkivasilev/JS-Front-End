function city(citiObj) {
    for (const [key, value] of Object.entries(citiObj)) {
        console.log(`${key} -> ${value}`)
    }
}

city({

    name: "Plovdiv",

    area: 389,

    population: 1162358,

    country: "Bulgaria",

    postCode: "4000"

})