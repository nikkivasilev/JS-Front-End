function generateReport() {
    let tableHeaderElements = Array.from(document.querySelector(`thead tr`).children)
    let selectedElements = []
    const output = document.querySelector(`#output`)
    for (let i = 0; i < tableHeaderElements.length; i++) {
        if (tableHeaderElements[i].children[0].checked) {
            let name = tableHeaderElements[i].textContent
            selectedElements.push({name, i})
        }
    }
    let result = []
   selectedElements.forEach((selectedElement) => {
       let name = selectedElement[`name`].toLowerCase()
       let elementNth = selectedElement[`i`] + 1
       let columnElements = Array.from(document.querySelectorAll(`tbody > tr > td:nth-child(${Number(elementNth)})`))
       columnElements = columnElements.map((el, index) => {
           let text = el.textContent
           return {name, index, text}
       })
       columnElements.forEach((el) => {
           let objName = el[`name`]
           let text = el[`text`]
           let index = el["index"]
           if (index >= result.length) {
            result.push({[objName]: text})
           } else {
               result[index][objName] = text
           }
       })
   })
    output.textContent = JSON.stringify(result)
}

