function catalogue(input) {
    let items = []
    for (const el of input) {
        let [name, price] = el.split(' : ')
        items.push({name, price})
    }
    let sortedItems = items.sort((a, b) => a['name'].localeCompare(b['name']))
    let letter = `A`
    if (sortedItems[0]['name'][0] === letter) {
        console.log(letter)
    }
    for (const item of sortedItems) {
        if(item['name'][0] !== letter) {
            letter = item['name'][0]
            console.log(letter)
        }
        console.log(`  ${item[`name`]}: ${item[`price`]}`)
    }

}

catalogue([

    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'

])