function solve() {
    let selectMenu = document.querySelector(`#selectMenuTo`)
    let binaryOption = document.createElement(`option`)
    binaryOption.textContent = `Binary`
    let hexadecimalOption = document.createElement(`option`)
    hexadecimalOption.textContent = `Hexadecimal`
    selectMenu.removeChild(selectMenu.children[0])
    selectMenu.appendChild(binaryOption)
    selectMenu.appendChild(hexadecimalOption)

    const convertButton = document.querySelector(`#container > button`)
    convertButton.addEventListener(`click`, convertHandler)

    function convertHandler() {
        const input = document.querySelector(`#input`).value
        const resultField = document.querySelector((`#result`))
        let selectedOption = selectMenu.options[selectMenu.selectedIndex].value
        let result;
        function dec2bin(dec) {
            return dec.toString(2);
        }
        function dec2hex(dec) {
            return dec.toString(16);
        }
        if (selectedOption === `Binary`) {
            result = dec2bin(Number(input))
        }
        if (selectedOption === `Hexadecimal`) {
            result = dec2hex(Number(input)).toUpperCase()
        }
        resultField.value = result
    }


}