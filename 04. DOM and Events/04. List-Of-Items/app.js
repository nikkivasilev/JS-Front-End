function addItem() {
    const ulContainer = document.getElementById(`items`)
    const input  = document.getElementById(`newItemText`)
    const newLi = document.createElement(`li`)
    let inputValue = input.value
    newLi.textContent = inputValue
    ulContainer.appendChild(newLi)
}