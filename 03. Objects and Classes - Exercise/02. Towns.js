function towns(input) {
    class town {
        constructor(name, latitude, longitude) {
            this.name = name;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }
    let townsArray = []
    for (const data of input) {
        let [name, latitude, longitude] = data.split(' | ')
        townsArray.push(new town(name, Number(latitude).toFixed(2), Number(longitude).toFixed(2)))
    }
    for (const town of townsArray) {
        console.log(`{ town: '${town.name}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`)
    }
}

towns(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625'])