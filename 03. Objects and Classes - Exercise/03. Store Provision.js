function storeProvision(localStore, delivery) {
    let localStoreItems = []
    let deliveryItems = []
    for (let i = 0; i < localStore.length; i += 2) {
        localStoreItems.push([localStore[i], Number(localStore[i + 1])])
    }
    for (let i = 0; i < delivery.length; i += 2) {
        deliveryItems.push([delivery[i], Number(delivery[i + 1])])
    }

    let allItems = {}

    for (const [name, quantity] of localStoreItems) {
        if (!allItems.hasOwnProperty(name)) {
            allItems[name] = 0
        }
        allItems[name] += quantity
    }
    for (const [name, quantity] of deliveryItems) {
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