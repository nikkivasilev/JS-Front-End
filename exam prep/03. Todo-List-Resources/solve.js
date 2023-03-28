// TODO
function attachEvents() {
    const form = document.querySelector(`form`)
    const BASE_URL = `http://localhost:3030/jsonstore/tasks/`
    const loadButton = document.getElementById(`load-button`)
    const addButton = document.getElementById(`add-button`)
    const todoList = document.getElementById(`todo-list`)
    const titleInput = document.getElementById(`title`)
    
    loadButton.addEventListener(`click`, loadHandler)
    addButton.addEventListener(`click`, addHandler)


    function loadHandler(event) {
      if (event) {
        event.preventDefault()
      }

        todoList.innerHTML = ``
        fetch(BASE_URL)
        .then((res) => res.json())
        .then((tasks) => {
            for (const taskKey in tasks) {
                let name = tasks[taskKey].name
                let li = createElement(`li`, ``, todoList)
                li.id = tasks[taskKey]._id
                createElement(`span`, name, li)
                let removeBtn = createElement(`button`, `Remove`, li)
                let editBtn = createElement(`button`, `Edit`, li)
                removeBtn.addEventListener(`click`, RemoveHandler)
                editBtn.addEventListener(`click`, EditHandler)
            }
        })
        .catch((err) => console.error(err))
    }

    function addHandler(event) {
      if (event) {
        event.preventDefault()
      }
        let name = titleInput.value
        
        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({name})
        }
        fetch(BASE_URL, httpHeaders)
        .then((res) => res.json)
        .then(() => {
            titleInput.value = ''
            loadHandler()
        })
        .catch((err) => console.error(err))
        
    }


    function RemoveHandler(event) {
       const id = event.target.parentNode.id
       const httpHeaders = {
        method: 'DELETE'
       }
       fetch(`${BASE_URL}${id}`, httpHeaders)
       .then(() => loadHandler())
       .catch((err) => console.error(err))
        
    }

    function EditHandler(event) {
        const liParent = event.currentTarget.parentNode
        const [span, _removeBtn, editBtn] = Array.from(liParent.children)
        const editInput = createElement(`input`, span.textContent)
        liParent.prepend(editInput)
        const submitBtn = createElement(`button`, `Submit`)
        submitBtn.addEventListener(`click`, submitHandler)
        liParent.appendChild(submitBtn)
        span.remove()
        editBtn.remove()
    }

    function submitHandler(event) {
      const liParent = event.currentTarget.parentNode
      const id = liParent.id
      const [input] = Array.from(liParent.children)
      const httpHeaders = {
        method: 'PATCH',
        body: JSON.stringify({name: input.value})
      }

      fetch(`${BASE_URL}${id}`, httpHeaders)
      .then(() => loadHandler())
      .catch((err) => console.error(err))
    
    
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
    




attachEvents();
    