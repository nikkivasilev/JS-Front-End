
function solve() {
    const BASE_URL = `http://localhost:3030/jsonstore/grocery/` 

    const inputDOMSelectors = {
        product : document.getElementById(`product`),
        count : document.getElementById(`count`),
        price : document.getElementById(`price`)
    }
    const btnDOMSelectors = {
        addBtn : document.getElementById(`add-product`),
        updateBtn : document.getElementById(`update-product`),
        loadBtn : document.getElementById(`load-product`),
        
    }
    let currentProducts = []
    let productToEdit = []
    const otherDOMSelectors = {
        form: document.querySelector(`.list`),
        tableBody: document.getElementById(`tbody`),
    }
    btnDOMSelectors.loadBtn.addEventListener(`click`, loadHandler)
    btnDOMSelectors.addBtn.addEventListener(`click`, addHandler)
    btnDOMSelectors.updateBtn.addEventListener(`click`, updateHandler)

    function addHandler(event) {
        if (event) {
            event.preventDefault()
        }
        let product = inputDOMSelectors.product.value
        let count = inputDOMSelectors.count.value
        let price = inputDOMSelectors.price.value
        let httpHeaders = {
            method: `POST`,
            body: JSON.stringify({product, count, price})
        }
        fetch(BASE_URL, httpHeaders)
        .then((res) => res.json())
        .then(() => loadHandler())
        .catch((err) => console.error(err))
        
    }

    function loadHandler(event) {
        if (event) {
            event.preventDefault()
        }
        fetch(BASE_URL)
        .then((res) => res.json())
        .then((products) => {
            currentProducts = Object.values(products)
            otherDOMSelectors.tableBody.innerHTML = ``
            for (const id in products) {
                let {product, count, price, _id} = products[id]
                const tr = createElement(`tr`, ``, otherDOMSelectors.tableBody)
                tr.id = _id
                createElement(`td`, product, tr, ``, [`name`])
                createElement(`td`, count, tr, ``, [`count-product`])
                createElement(`td`, price, tr, ``, [`product-price`])
                const btnGroup = createElement(`td`, ``, tr, ``, [`btn`])
                const updateBtn = createElement(`button`, `Update`, btnGroup, ``, [`update`])
                const deleteBtn = createElement(`button`, `Delete`, btnGroup, ``, [`delete`])
                updateBtn.addEventListener(`click`, loadUpdateHandler)
                deleteBtn.addEventListener(`click`, deleteHandler)

            }
            
        })
        .catch((err) => console.error(err))
    }

    function updateHandler(event) {
        if (event) {
            event.preventDefault()
        }
        let {product, count, price} = inputDOMSelectors
        const payload = JSON.stringify({
            product: product.value,
            count: count.value, price: price.value
        })
        const httpHeaders = {
            method: 'PATCH',
            body: payload
        }

        fetch(`${BASE_URL}${productToEdit._id}`, httpHeaders)
        .then(() => {
            loadHandler()
            btnDOMSelectors.updateBtn.setAttribute(`disabled`, true)
            btnDOMSelectors.addBtn.removeAttribute(`disabled`)})
            otherDOMSelectors.form.reset()
        .catch((err) => console.error(err))
        


    }
    function loadUpdateHandler(event) {
        const id = this.parentNode.parentNode.id
        productToEdit = currentProducts.find((p) => p._id === id)
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = productToEdit[key]
        }
        btnDOMSelectors.addBtn.setAttribute(`disabled`, true)
        btnDOMSelectors.updateBtn.removeAttribute(`disabled`)
    }

    function deleteHandler() {
        const id = this.parentNode.parentNode.id
        httpHeaders = {
            method: "DELETE"
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(() => loadHandler())

    }

    function createElement(type, content, parent, id, classes, attributes) {
        const htmlElement = document.createElement(type);
      
        if (content && type !== `input`) {
          htmlElement.textContent = content;
        }
      
        if (content && type === `input`) {
          htmlElement.value = content;
        }
      
        if (id) {
          htmlElement.id = id;
        }
      
        if (classes) {
          htmlElement.classList.add(...classes);
        }
        if (attributes) {
          for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]);
          }
        }
      
        if (parent) {
          parent.appendChild(htmlElement);
        }
      
        return htmlElement;
      }

}

// <!-- <tr>
//<td class="name">Milk</td>
//<td class="count-product">4</td>
//<td class="product-price">2</td>
//<td class="btn"><button class="update">Update</button> <button class="delete">Delete</button></td>
// </tr> -->

solve()