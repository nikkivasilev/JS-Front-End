function subtract() {
    let firstNum = Number(document.getElementById("firstNumber").value)
    let secondNum = Number(document.getElementById("secondNumber").value)
    let result = document.getElementById(`result`)
    let sum = firstNum - secondNum
    let sumP = document.createElement(`p`)
    sumP.textContent = sum
    result.appendChild(sumP)
}