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

    form.submit(function(e) {
        e.preventDefault();
    })

    function loadHandler(e) {
        if (e) {
            e.preventDefault();
        }
        todoList.innerHTML = ``
        fetch(BASE_URL)
        .then((res) => res.json())
        .then((tasks) => {
            for (const taskKey in tasks) {
                let name = tasks[taskKey].name
                let li = createElement(`li`, ``, todoList)
                createElement(`span`, name, li)
                let removeBtn = createElement(`button`, `Remove`, li)
                let editBtn = createElement(`button`, `Edit`, li)
                removeBtn.addEventListener(`click`, RemoveHandler)
                editBtn.addEventListener(`click`, EditHandler)
            }
        })
        .catch((err) => console.error(err))
    }

    function addHandler(e) {
        if (e) {
            e.preventDefault();
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


    function RemoveHandler(e) {
       const currentTask = e.target.parentElement
       let task = parentElement.querySelector(`span`)
       
       console.log(currentTask);
        loadHandler()
    }

    function EditHandler(e) {
        
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
    