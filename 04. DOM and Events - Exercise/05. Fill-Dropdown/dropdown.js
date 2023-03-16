function addItem() {
    let select = document.getElementById(`menu`)
    let newItemTextInput = document.getElementById(`newItemText`)
    let newItemValueInput = document.getElementById(`newItemValue`)
    let newItemText = newItemTextInput.value
    let newItemValue = newItemValueInput.value
    let option = document.createElement(`option`)
    option.textContent = newItemText
    option.value = newItemValue
    select.appendChild(option)
    newItemTextInput.value = ''
    newItemValueInput.value = ''

}