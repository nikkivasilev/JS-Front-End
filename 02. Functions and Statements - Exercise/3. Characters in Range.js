function charInRange(firstChar, secondChar) {
    let start = Math.min(firstChar.codePointAt(0), secondChar.codePointAt(0))
    let end = Math.max(firstChar.codePointAt(0), secondChar.codePointAt(0))
    let result = []
    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i))
    }
    console.log(result.join(' '))
}

charInRange('a', 'd')