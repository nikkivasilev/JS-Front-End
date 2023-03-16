function focused() {
    const allInputs = Array.from(document.getElementsByTagName(`input`))
    allInputs.forEach(input => {
        input.addEventListener("focus", (event) => {
            event.target.parentElement.classList.add("focused")
          });
          input.addEventListener("blur", (event) => {
            event.target.parentElement.classList.remove("focused")
          });
    })
}