function loadingBar(percent) {
    if (percent === 100) {
        console.log(`100% Complete!`)
        console.log(`[%%%%%%%%%%]`)
    } else {
    let loaded = percent / 10
        console.log(`${percent}% [${'%'.repeat(loaded)}${'.'.repeat(10 - loaded)}]`)
        console.log(`Still loading...`)
}}