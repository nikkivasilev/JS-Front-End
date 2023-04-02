function attachEvents() {
    const BASE_URL = `http://localhost:3030/jsonstore/collections/students/`
    const submitBtn = document.getElementById(`submit`)
    const tableBody = document.querySelector(`#results > tbody`)
    const inputDOMSelectors = {
        firstNameInput: document.querySelector(`input[name=firstName]`),
        lastNameInput: document.querySelector(`input[name=lastName]`),
        facultyNumberInput: document.querySelector(`input[name=facultyNumber]`),
        gradeInput: document.querySelector(`input[name=grade]`),
    }
    loadStudentsHandler()
    submitBtn.addEventListener(`click`, submitHandler)
    

    function submitHandler(e) {
        let {firstNameInput, lastNameInput, facultyNumberInput, gradeInput} = inputDOMSelectors
        let firstName = firstNameInput.value
        let lastName = lastNameInput.value
        let facultyNumber = facultyNumberInput.value
        let grade = gradeInput.value
        if (firstName && lastName && facultyNumber && grade) {
            let httpHeaders = {
                method: 'POST',
                body: JSON.stringify({firstName, lastName, facultyNumber, grade})
            }
            fetch(BASE_URL, httpHeaders)
            .then(() => loadStudentsHandler())
            .catch((err) => console.log)
        }
    }

    function loadStudentsHandler() {
        fetch(BASE_URL)
        .then((res) => res.json())
        .then((students) => {
            console.log(students);
            tableBody.innerHTML = ''
            for (const studentId in students) {
                let {firstName, lastName, facultyNumber, grade, _id} = students[studentId]
                const tr = createElement(`tr`, ``, tableBody,)
                grade = Number(grade).toFixed(2)
                createElement(`td`, firstName, tr)
                createElement(`td`, lastName, tr)
                createElement(`td`, facultyNumber, tr)
                createElement(`td`, grade, tr)

            }

        })
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


