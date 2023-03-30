window.addEventListener('load', solve);

function solve() {
  let totalLikes = 0
  const inputDOMSelectors = {
    genre : document.getElementById(`genre`),
    name : document.getElementById(`name`),
    author : document.getElementById(`author`),
    date : document.getElementById(`date`),
  }
  const otherDOMSelectors = {
    addBtn : document.getElementById(`add-btn`),
    allHitsCOntainer: document.querySelector(`.all-hits-container`),
    saveContainer: document.querySelector(`.saved-container`),
    totalLikesContainer: document.querySelector(`.likes > p`),
  }

  otherDOMSelectors.addBtn.addEventListener(`click`, addHandler)
  

  function addHandler(event) {
    if (event) {
      event.preventDefault()
    }
    let allInputsAreNonEmpty = Object.values(inputDOMSelectors)
    .every((input) => input.value !== '')

    if (!allInputsAreNonEmpty) {
      console.log(`VERY BAD`);
      return;
    }
    const {genre, name, author, date} = inputDOMSelectors
    const songContainer = createElement(`div`, ``, otherDOMSelectors.allHitsCOntainer, '', [`hits-info`])
    createElement(`img`, '', songContainer, '', '', {src: './static/img/img.png'},)
    createElement(`h2`, `Genre: ${genre.value}`, songContainer)
    createElement(`h2`, `Name: ${name.value}`, songContainer)
    createElement(`h2`, `Author: ${author.value}`, songContainer)
    createElement(`h3`, `Date: ${date.value}`, songContainer)
    const saveBtn = createElement(`button`, `Save song`, songContainer, ``, [`save-btn`])
    const likeBtn = createElement(`button`, `Like song`, songContainer, ``, [`like-btn`])
    const deleteBtn = createElement(`button`, `Delete`, songContainer, ``, [`delete-btn`])
    likeBtn.addEventListener(`click`, likeHandler)
    deleteBtn.addEventListener(`click`, deleteHandler)
    saveBtn.addEventListener(`click`, saveHandler)
    
    
    clearAllInputs()

    

  }


  function likeHandler() {
    this.setAttribute(`disabled`, true)
    totalLikes++
    otherDOMSelectors.totalLikesContainer.textContent = `Total Likes: ${totalLikes}`
  }
  function deleteHandler() {
    this.parentNode.remove()
  }
  function saveHandler(e) {
    const songRef = this.parentNode
    const saveBtn = songRef.querySelector(`.save-btn`)
    const likeBtn = songRef.querySelector(`.like-btn`)
    otherDOMSelectors.saveContainer.appendChild(songRef)
    saveBtn.remove()
    likeBtn.remove()
  }
  
function clearAllInputs() {
  Object.values(inputDOMSelectors)
  .forEach((input) => {
    input.value = ''
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


