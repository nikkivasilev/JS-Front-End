function toggle() {
    let buttonSpan = document.querySelector(`#accordion > div.head > span`)
    let extra = document.getElementById(`extra`)
        if (extra.style.display === `none`) {
            extra.style.display = `block`
            buttonSpan.textContent = `Less`
        } else {
            extra.style.display = `none`
            buttonSpan.textContent = `More`

        }
}