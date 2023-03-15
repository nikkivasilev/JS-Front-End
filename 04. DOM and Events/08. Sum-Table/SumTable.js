function sumTable() {
    let values = Array.from(document.querySelectorAll(`body > table > tbody td:nth-child(2)`)).slice(0, -1)
    let sum = 0
    let total = document.querySelector(`#sum`)
    values.forEach(td => {
        let num = Number(td.textContent)
        sum += num
    })
    total.textContent = sum
}

