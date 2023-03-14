function addItem() {
    const ulContainer = document.getElementById(`items`)
    const input  = document.getElementById(`newItemText`)
    const newLi = document.createElement(`li`)
    const newAnchor = document.createElement(`a`)
    let inputValue = input.value
    newLi.textContent = inputValue
    newAnchor.textContent = `[Delete]`
    newAnchor.setAttribute('href', '#')
    newAnchor.addEventListener(`click`, deleteHandler)
    newLi.appendChild(newAnchor)
    ulContainer.appendChild(newLi)
    input.value = ''


    function deleteHandler(e) {
        let liItem = e.currentTarget.parentElement 
        liItem.remove()
    }
}