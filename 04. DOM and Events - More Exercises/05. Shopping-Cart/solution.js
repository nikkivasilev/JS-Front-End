function solve() {
   let totalPrice = 0
   let boughtProducts = {}
   let resultTextarea = document.getElementsByTagName(`textarea`)[0]
   let addButtons = Array.from(document.querySelectorAll(`.add-product`))
   let checkoutButton = document.querySelector(`.checkout`)
   addButtons.forEach(button =>{
      button.addEventListener('click', addProductHandler)
   })
   checkoutButton.addEventListener(`click`, checkoutHandler)
   function addProductHandler (event) {
      let button = event.target
      let productElement = button.parentElement.parentElement
      let productName = productElement.querySelector(`.product-details .product-title`).textContent
      let productPrice = Number(productElement.querySelector(`.product-line-price`).textContent)
      totalPrice += productPrice
      boughtProducts[productName] = 1
      let resultText = `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      resultTextarea.textContent += resultText
   }

   function checkoutHandler (e) {
      resultTextarea.textContent += `You bought ${Object.keys(boughtProducts).join(`, `)} for ${totalPrice.toFixed(2)}.`
      addButtons.forEach((button) => {
         button.disabled = true
      })
      e.target.disabled = true
   }
   
}
