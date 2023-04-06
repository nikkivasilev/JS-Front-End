window.addEventListener("load", solve);

function solve() {
  
  const inputDOMSelectors = {
    firstName: document.getElementById(`first-name`),
    lastName: document.getElementById(`last-name`),
    age: document.getElementById(`age`),
    title: document.getElementById(`story-title`),
    genre: document.getElementById(`genre`),
    story: document.getElementById(`story`),
  }

  const otherDOMSelectors = {
    formBtn: document.getElementById(`form-btn`),
    previewContainer: document.getElementById(`preview-list`),
    mainDiv: document.getElementById(`main`),
  }
  let publishedData = {}
  otherDOMSelectors.formBtn.addEventListener(`click`, publishHandler)
  

  function publishHandler(event) {
    let data = {}
    for (const key in inputDOMSelectors) {
      data[key] = inputDOMSelectors[key].value
    }
    if (Object.values(data).every((v) => v !== ``)) {
      publishedData = data
      for (const key in inputDOMSelectors) {
        if (key !== `genre`){
        inputDOMSelectors[key].value = ''
        }
      }
      otherDOMSelectors.formBtn.disabled = true
      const li = createElement(`li`, ``, otherDOMSelectors.previewContainer, ``, [`story-info`])
      const article = createElement(`article`, ``, li)
      createElement(`h4`, `Name: ${data.firstName} ${data.lastName}`, article)
      createElement(`p`, `Age: ${data.age}`, article)
      createElement(`p`, `Title: ${data.title}`, article)
      createElement(`p`, `Genre: ${data.genre}`, article)
      createElement(`p`, data.story, article)
      const saveBtn = createElement(`button`, `Save Story`, li, ``, [`save-btn`])
      const editBtn = createElement(`button`, `Edit Story`, li, ``, [`edit-btn`])
      const deleteBtn = createElement(`button`, `Delete Story`, li, ``, [`delete-btn`])

      saveBtn.addEventListener(`click`, saveHandler)
      editBtn.addEventListener(`click`, editHandler)
      deleteBtn.addEventListener(`click`, deleteHandler)      
    }

    function saveHandler() {
      otherDOMSelectors.mainDiv.innerHTML = `<h1>Your scary story is saved!</h1>`
    }
    function editHandler() {
      for (const key in inputDOMSelectors) {
        inputDOMSelectors[key].value = publishedData[key]
      }
      otherDOMSelectors.formBtn.disabled = false
      otherDOMSelectors.previewContainer.innerHTML = `<h3>Preview</h3>`
    }
    function deleteHandler() {
      otherDOMSelectors.formBtn.disabled = false
      otherDOMSelectors.previewContainer.innerHTML = `<h3>Preview</h3>`
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
