function attachEvents() {
    const BASE_URL = `http://localhost:3030/jsonstore/messenger/`
    const messagesContainer = document.getElementById(`messages`)
    const submitBtn = document.getElementById(`submit`)
    const refreshBtn = document.getElementById(`refresh`)
    const nameInput = document.querySelector(`#controls > div:nth-child(1) > input[type=text]`)
    const messageInput = document.querySelector(`#controls > div:nth-child(2) > input[type=text]`)

    submitBtn.addEventListener(`click`, submitHandler)
    refreshBtn.addEventListener(`click`, refreshHandler)


    function submitHandler() {
        let author = nameInput.value
        let content = messageInput.value
        const httpHeaders = {
            method: "POST",
            body: JSON.stringify({author, content }),
          };
        fetch(BASE_URL, httpHeaders)
        .then((res) => res.json())
        .catch((err) => console.error(err))
    }

    function refreshHandler() {
        fetch(BASE_URL)
        .then((res) => res.json())
        .then((comments) => {
            let output = []
            for (const key in comments) {
                let {author, content} = comments[key]
                output.push(`${author}: ${content}`)           
            }
            messagesContainer.value = output.join(`\n`)

        })
        .catch((err) => {
            console.error(err)
        })
    }


}

attachEvents();


