function solve() {
    const textInput = document.querySelector(`#text`)
    const conventionInput = document.querySelector(`#naming-convention`)
    const resultSpan = document.querySelector(`#result`)
    let text = textInput.value
    let convention = conventionInput.value
    let result = []
    let words = text.toLowerCase().split(' ')

    if (words.length > 0 && (convention === "Camel Case" || convention === `Pascal Case`)) {
        if (convention === `Camel Case`) {
            result.push(words.shift())
            words.forEach((word) => {
                word = word[0].toUpperCase() + word.slice(1)
                result.push(word)
            })
        } else {
            words.forEach((word) => {
                word = word[0].toUpperCase() + word.slice(1)
                result.push(word)
            })
        }
    } else {
        result.push(`Error!`)
    }
    result = result.join('')
    resultSpan.textContent = result
}

