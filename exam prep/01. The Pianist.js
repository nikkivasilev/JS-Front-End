function thePianist(input) {
    let number = input.shift()
    let initialPieces = input.slice(0, number)
    let commands = input.slice(number, -1)
    let pieces = {}
    initialPieces.forEach((data) => {
        let [piece, composer, key] = data.split(`|`)
        pieces[piece] = [composer, key]
    })
    for (const command of commands) {
        let [action, ...data] = command.split('|')
        if (action === `Add`) {
            let [piece, composer, key] = data
            if(!pieces.hasOwnProperty(piece)) {
                pieces[piece] = [composer, key]
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            } else {
                console.log(`${piece} is already in the collection!`)
            }
        } else if (action === 'Remove') {
            let piece = data[0]
            if(pieces.hasOwnProperty(piece)) {
                delete pieces[piece]
                console.log(`Successfully removed ${piece}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        } else if (action === `ChangeKey`) {
            let [piece, key] = data
            if(pieces.hasOwnProperty(piece)) {
                pieces[piece][1] = key
                console.log(`Changed the key of ${piece} to ${key}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    }
    for (const piece in pieces) {
        let [composer, key] = pieces[piece]
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
    }

}

thePianist([
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
)