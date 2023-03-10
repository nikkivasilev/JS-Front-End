function wordsTracker(input) {
    let toFind = input.shift().split(' ')
    let found = []
    for (const word of toFind) {
        let count = input.filter(current => current === word).length
        found.push({word, count})
    }
    found = found.sort((a, b) => b[`count`] - a[`count`])
    for (const el of found) {
        console.log(`${el['word']} - ${el[`count`]}`)
    }
}

wordsTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])