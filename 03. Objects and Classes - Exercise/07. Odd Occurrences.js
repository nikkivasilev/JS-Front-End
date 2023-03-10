function oddOccurrences(input) {
    input = input.toLowerCase().split(' ')
    let result = []
    for (const el of input) {
        if (!result.includes(el)) {
            let count = input.filter(current => current === el).length
            if (count % 2 !== 0) {
                result.push(el)
            }
        }
    }
    console.log(result.join(' '))
}


oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')