window.addEventListener('load', solve);

function solve() {
    const inputDOMSelectors = {
        title: document.getElementById(`title`),
        description: document.getElementById(`description`),
        label: document.getElementById(`label`),
        points: document.getElementById(`points`),
        assignee: document.getElementById(`assignee`),
    }

    const otherDOMSelectors = {
        taskIdInput: document.getElementById(`task-id`),
        formCreateBtn: document.getElementById(`create-task-btn`),
        formDeleteBtn: document.getElementById(`delete-task-btn`),
        tasksSection: document.getElementById(`tasks-section`),
        totalPointsP: document.getElementById(`total-sprint-points`)
    }
    let totalPoints = 0

    otherDOMSelectors.formCreateBtn.addEventListener(`click`, createHandler)
    otherDOMSelectors.formDeleteBtn.addEventListener(`click`, deleteMainHandler)
    let tasks = []


    function createHandler() {
        let data = {}
        for (const key in inputDOMSelectors) {
            data[key] = inputDOMSelectors[key].value
        }
        if (Object.values(data).every((v) => v !== ``)) {
            let {title, description, label, points, assignee} = data
            let taskId = tasks.length + 1
            tasks.push({title, description, label, points, assignee, taskId})
            const article = createElement(`article`, '', otherDOMSelectors.tasksSection, `task-${taskId}`, [`task-card`])
            if (label === `Feature`) {
                const labelEl = createElement(`div`, 'Feature ⊡', article, ``, ['task-card-label', 'feature'])
                labelEl.innerHtml = ''
            } else if (label === `Low Priority Bug`) {
                const labelEl = createElement(`div`, 'Low Priority Bug ☉', article, ``, ['task-card-label', 'low-priority'])
                labelEl.innerHtml = `Low Priority Bug`
            } else if (label === `High Priority Bug`) {
                const labelEl = createElement(`div`, 'High Priority Bug ⚠', article, ``, ['task-card-label', 'high-priority'])
                labelEl.innerHtml = ``
            }
            createElement(`h3`, title, article, ``, [`task-card-title`])
            createElement(`p`, description, article, ``, [`task-card-description`])
            createElement(`div`, `Estimated at ${points} points`, article, ``, [`task-card-points`])
            createElement(`div`, `Assigned to: ${assignee}`, article, ``, [`task-card-assignee`])
            const actionsDiv = createElement(`div`, ``, article, ``, [`task-card-actions`])
            const deleteBtn = createElement(`button`, `Delete`, actionsDiv)
            totalPoints += Number(points)
            otherDOMSelectors.totalPointsP.textContent = `Total Points ${totalPoints}pts`
            deleteBtn.addEventListener(`click`, deleteHandler)
            for (const key in inputDOMSelectors) {
                if (key !== `label`){
                inputDOMSelectors[key].value = ''
                }
              }
              
        }
    }
    function deleteHandler(event) {
        let id = event.target.parentNode.parentNode.id
        id = id.split('-').slice(-1)
        let data = tasks[id - 1]
        console.log(data);
        otherDOMSelectors.taskIdInput.value = id
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = data[key]
            inputDOMSelectors[key].disabled = true
        }
        otherDOMSelectors.formCreateBtn.disabled = true
        otherDOMSelectors.formDeleteBtn.disabled = false
    }

    function deleteMainHandler () {
        let id = otherDOMSelectors.taskIdInput.value
        const task = document.getElementById(`task-${id}`)
        let data = tasks[id - 1]
        tasks.splice(id-1 , 1)
        totalPoints -= Number(data.points) 
        otherDOMSelectors.totalPointsP.textContent = `Total Points ${totalPoints}pts`
        task.remove()
        otherDOMSelectors.formCreateBtn.disabled = false
        otherDOMSelectors.formDeleteBtn.disabled = true
        for (const key in inputDOMSelectors) {
            if (key !== `label`){
            inputDOMSelectors[key].value = ''
            inputDOMSelectors[key].disabled = false
            }
          }

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