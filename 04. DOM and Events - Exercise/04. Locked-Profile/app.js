function lockedProfile() {
    const allButtons = Array.from(document.getElementsByTagName(`button`)) 
    allButtons.forEach((button) => {
        button.addEventListener(`click`, toggleInformation)
    })

    function toggleInformation(event) {
        const btn = event.currentTarget
        const currentProfile = btn.parentElement;
        let children = Array.from(currentProfile.children)
        const additionalInformationDiv = children[9]
        const input = children[4]
        if (input.checked) {
        if (btn.textContent === `Show more`) {
            additionalInformationDiv.style.display = `block`
            btn.textContent = `Hide it`
        } else {
            additionalInformationDiv.style.display = `none`
            btn.textContent = `Show more`
        } 
    }
    }
}
