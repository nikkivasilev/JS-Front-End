window.addEventListener("load", solve);

function solve() {
  const mainContainer = document.getElementById(`main`)
  const firstNameInput = document.getElementById(`first-name`);
  const lastNameInput = document.getElementById(`last-name`);
  const ageInput = document.getElementById(`age`);
  const titleInput = document.getElementById(`story-title`);
  const genreSelector = document.getElementById(`genre`);
  const storyTextarea = document.getElementById(`story`);
  const publishBtn = document.getElementById(`form-btn`);
  const previewContainer = document.getElementById(`preview-list`);
  let storyData = [];

  publishBtn.addEventListener(`click`, publishHandler);



  function publishHandler() {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let title = titleInput.value;
    let genre = genreSelector.value;
    let story = storyTextarea.value;
    if (firstName && lastName && age && title && genre && story) {
      storyData = [firstName, lastName, age, title, genre, story];
      publishBtn.disabled = true;
      firstNameInput.value = ``
      lastNameInput.value = ``
      ageInput.value = ``
      titleInput.value = ``
      genreSelector.value= `Disturbing`
      storyTextarea.value = ``
      const storyPreviewContainer = createElement(`li`, ``, previewContainer,``,[`story-info`]);
      const article = createElement(`article`, ``, storyPreviewContainer);
      createElement(`h4`, `Name: ${firstName} ${lastName}`, article);
      createElement(`p`, `Age: ${age}`, article);
      createElement(`p`, `Title: ${title}`, article);
      createElement(`p`, `Genre: ${genre}`, article);
      createElement(`p`, story, article);
      const saveBtn = createElement(`button`, `Save Story`, storyPreviewContainer, ``, [
        `save-btn`,
      ]);
      const editBtn = createElement(`button`, `Edit Story`, storyPreviewContainer, ``, [
        `edit-btn`,
      ]);
      const deleteBtn = createElement(`button`, `Delete Story`, storyPreviewContainer, ``, [
        `delete-btn`,
      ]);
      saveBtn.addEventListener(`click`, saveHandler);
      editBtn.addEventListener(`click`, editHandler);
      deleteBtn.addEventListener(`click`, deleteHandler);
    }
  }

  function saveHandler() {
    mainContainer.innerHTML = `<h1>Your scary story is saved!</h1>`

  }
  function editHandler() {
    let [firstName, lastName, age, title, genre, story] = storyData
    publishBtn.disabled = false
    previewContainer.innerHTML = `<h3>Preview</h3>`
    firstNameInput.value = firstName
      lastNameInput.value = lastName
      ageInput.value = age
      titleInput.value =title
      genreSelector.value= `Disturbing`
      storyTextarea.value = story
  }
  function deleteHandler() {
    publishBtn.disabled = false
    previewContainer.innerHTML = `<h3>Preview</h3>`
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
