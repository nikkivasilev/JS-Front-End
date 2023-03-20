function search() {
    const itemsList = Array.from(document.querySelector(`#towns`).children)
    const search = document.querySelector(`#searchText`).value
    const resultDiv = document.querySelector(`#result`)
    let matches = 0
    itemsList.forEach((item) => {
        let city = item.textContent
        item.style.textDecoration = ``
        item.style.fontWeight = ``
        if (city.includes(search)) {
            item.style.textDecoration = `underline`
            item.style.fontWeight = `bold`
            matches ++
        }
    })
    resultDiv.textContent = `${matches} matches found`
}
