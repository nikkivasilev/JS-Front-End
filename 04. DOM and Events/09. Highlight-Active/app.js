function focused() {
    const divs = Array.from(document.querySelectorAll(`body > div > div`))
    divs.forEach(div => {
        div.addEventListener("focusin", () => {
            div.classList.add("focused");
          });
          div.addEventListener("focusout", () => {
            div.classList.remove("focused");
          });
    })
}