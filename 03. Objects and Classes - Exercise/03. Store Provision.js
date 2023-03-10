function storeProvision(localStore, delivery) {
    let todoItems = [...localStore, ...delivery]
    let items = []
    for (let i = 0; i < localStore.length + delivery.length; i += 2) {
        items.push([todoItems[i], Number(todoItems[i + 1])])
    }
    let allItems = {}
    for (const [name, quantity] of items) {
        if (!allItems.hasOwnProperty(name)) {
            allItems[name] = 0
        }
        allItems[name] += quantity
    }
    for (const [key, value] of Object.entries(allItems)) {
        console.log(`${key} -> ${value}`)
    }
}

storeProvision([

        'Chips', '5', 'CocaCola', '9', 'Bananas',

        '14', 'Pasta', '4', 'Beer', '2'

    ],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ])