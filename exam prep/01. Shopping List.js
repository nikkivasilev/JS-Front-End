function shoppingList(input) {
    let products = input.shift().split('!')
    let commands = input.slice(0, -1)
    for (const command of commands) {
        let [action, ...data] = command.split(` `)
        if (action === `Urgent`) {
            let item = data[0]
            if (!products.includes(item)) {
                products.unshift(item)
            }
        } else  if (action === `Unnecessary`) {
            let item = data[0]
            products = products.filter(el => {return el !== item})
        } else  if (action === `Correct`) {
            let [oldItem, newItem] = data

            if (products.includes(oldItem)) {
                let index = products.indexOf(oldItem)
                products[index] = newItem
            }

        } else if (action === `Rearrange`) {
            let itemToRemove = data[0]
            if (products.includes(itemToRemove)) {
                products = products.filter((item) => item !== itemToRemove)
                products.push(itemToRemove)
              }
        }

    }
    console.log(products.join(`, `))
}




shoppingList([
  "Tomatoes!Potatoes!Bread!Milk",

  "Unnecessary Milk",

  "Urgent Tomatoes",
    `Correct Tomatoes Black`,
    `Rearrange Black`,
    `Rearrange Black`,
  "Go Shopping!",
]);

shoppingList(["Milk!Pepper!Salt!Water!Banana",

    "Urgent Salt",

    "Unnecessary Grapes",

    "Correct Pepper Onion",

    "Rearrange Grapes",

    "Correct Tomatoes Potatoes",

    "Go Shopping!"])