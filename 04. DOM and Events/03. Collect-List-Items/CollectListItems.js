function extractText() {
    let liElements = Array.from(document.querySelectorAll(`#items > li`))
    let result = document.getElementById(`result`)
    liElements.forEach((li) => {
        result.textContent += li.textContent + `\n`
    })
}