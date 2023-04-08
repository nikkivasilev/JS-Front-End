// TODO:
function attachEvents() {
    const BASE_URL = `http://localhost:3030/jsonstore/tasks/`
    const loadBtn = document.querySelector(`#load-board-btn`)
    const createBtn = document.querySelector(`#create-task-btn`)
    const titleInput = document.querySelector(`#title`)
    const descriptionInput = document.querySelector(`#description`)
    const todoUl = document.querySelector(`#todo-section > ul`)
    const inProgressUl = document.querySelector(`#in-progress-section > ul`)
    const codeReviewUl = document.querySelector(`#code-review-section > ul`)
    const doneUl = document.querySelector(`#done-section > ul`)
    let allTask;

    loadBtn.addEventListener(`click`, loadHandler)
    createBtn.addEventListener(`click`, createHandler)

    function createHandler() {
        let title = titleInput.value
        let description = descriptionInput.value
        if (title !== '' && description !== '') {
        let status = `ToDo`
        let httpHeaders = {
            method: `POST`,
            body: JSON.stringify({title: title, description: description, status: status})
        }
        fetch(BASE_URL, httpHeaders)
        .then((res) => res.json())
        .then(() => {
            titleInput.value = ''
            descriptionInput.value = ''
            loadHandler()
            
        })
        .catch((err) => console.error(err))
    }
    }

    function loadHandler() {
        todoUl.innerHTML = ''
        inProgressUl.innerHTML = ''
        codeReviewUl.innerHTML = ''
        doneUl.innerHTML = ''

        fetch(BASE_URL)
        .then((res) => res.json())
        .then((tasks) => {
            allTask = tasks
            Object.values(tasks).forEach((task) => {
                let {title, description, status, _id} = task
                if (status === `ToDo`){
                    const li = createElement(`li`, '', todoUl, ``, ['task'])
                    li.id = _id
                    createElement(`h3`, title, li)
                    createElement(`p`, description, li)
                    const button = createElement(`button`, `Move to In Progress`, li)
                    button.addEventListener(`click`, moveHandler)
                } else if (status === `In Progress`){
                    const li = createElement(`li`, '', inProgressUl, ``, ['task'])
                    li.id = _id
                    createElement(`h3`, title, li)
                    createElement(`p`, description, li)
                    const button = createElement(`button`, `Move to Code Review`, li)
                    button.addEventListener(`click`, moveHandler)
                } else if (status === `Code Review`){
                    const li = createElement(`li`, '', codeReviewUl, ``, ['task'])
                    li.id = _id
                    createElement(`h3`, title, li)
                    createElement(`p`, description, li)
                    const button = createElement(`button`, `Move to Done`, li)
                    button.addEventListener(`click`, moveHandler)
                } else if (status === `Done`){
                    const li = createElement(`li`, '', doneUl, ``, ['task'])
                    li.id = _id
                    createElement(`h3`, title, li)
                    createElement(`p`, description, li)
                    const button = createElement(`button`, `Close`, li)
                    button.addEventListener(`click`, closeHandler)
                }
                
                    
            })
        })
        .catch((err) => console.error(err))
    }

    function closeHandler(event) {
        let id = this.parentNode.id
        httpHeaders = {
            method: "DELETE"
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(() => loadHandler())
    }

    function moveHandler(event) {
        fetch(BASE_URL)
        .then((res) => res.json())
        .then((tasks) => {
        let id = this.parentNode.id
        let newStatus;
        let currentStatus = tasks[id].status
        if (currentStatus === `ToDo`) {
            newStatus = `In Progress`
        } else if (currentStatus === `In Progress`) {
            newStatus = `Code Review`
        } else if (currentStatus === `Code Review`) {
            newStatus = `Done`
        }
         
        const payload = JSON.stringify({
            status: newStatus,
        })
        
        const httpHeaders = {
            method: 'PATCH',
            body: payload
        }   

        fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(() => {
            loadHandler()
        })
        .catch((err) => console.error(err))

    })


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