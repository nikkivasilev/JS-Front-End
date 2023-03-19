function validate() {
    const inputField = document.querySelector(`#email`)
    inputField.addEventListener(`focusout`, focusEventAction)

    function focusEventAction(e) {
        let email = e.target.value
        if (!validateEmail(email)) {
            e.target.className = `error`
        } else if (validateEmail(email)) {
            e.target.className = ``
        }
    }
    function validateEmail(email) {
        const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        return regex.test(email);
      }
}

