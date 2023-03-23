function getInfo() {
    const BASE_URL = `http://localhost:3030/jsonstore/bus/businfo/`
    const stopIdInput = document.getElementById(`stopId`)
    const stopName = document.getElementById(`stopName`)
    const busesContainer = document.getElementById(`buses`)
    const stopId = stopIdInput.value

    busesContainer.innerHTML = ''
    fetch(`${BASE_URL}${stopId}`)
        .then((res) => res.json())
        .then((busInfo) => {
            const {name, buses} = busInfo
            stopName.textContent = name
            for (const busNum in buses) {
                const li = document.createElement(`li`)
                li.textContent = `Bus ${busNum} arrives in ${buses[busNum]} minutes`
                busesContainer.appendChild(li)
            }
        })
        .catch((err) =>{
            stopName.textContent = `Error`
        })

}