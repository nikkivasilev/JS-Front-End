window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById(`first-name`);
  const LastNameInput = document.getElementById(`last-name`);
  const ageInput = document.getElementById(`age`);
  const titleInput = document.getElementById(`story-title`);
  const genreSelector = document.getElementById(`genre`);
  const storyTextarea = document.getElementById(`story`);
  const publishBtn = document.getElementById(`form-btn`);
  const previewContainer = document.getElementById(`preview-list`);
  publishBtn.addEventListener(`click`, publishHandler);
  let storyData = [];
  let firstName = firstNameInput.value;
  let lastName = LastNameInput.value;
  let age = ageInput.value;
  let title = titleInput.value;
  let genre = genreSelector.options[genreSelector.selectedIndex].value;
  let story = storyTextarea.value;

  function publishHandler() {
    storyData = [firstName, lastName, age, title, genre, story];
    if (firstName && lastName && age && title && genre && story) {
      publishBtn.disabled = true;
      firstNameInput.value = ``
      LastNameInput.value = ``
      ageInput.value = ``
      titleInput.value = ``
      storyTextarea.value = ``
      const storyPreviewContainer = createElement(
        `li`,
        ``,
        previewContainer,
        ``,
        [`story-info`]
      );
      const article = createElement(`article`, ``, storyPreviewContainer);
      createElement(`h4`, `Name : ${firstName} ${lastName}`, article);
      createElement(`p`, `Age: ${age}`, article);
      createElement(`p`, `Title: ${title}`, article);
      createElement(`p`, `Genre: ${genre}`, article);
      createElement(`p`, story, article);
      const saveBtn = createElement(`button`, `Save Story`, article, ``, [
        `save-btn`,
      ]);
      const editBtn = createElement(`button`, `Edit Story`, article, ``, [
        `edit-btn`,
      ]);
      const deleteBtn = createElement(`button`, `Delete Story`, article, ``, [
        `delete-btn`,
      ]);
      saveBtn.addEventListener(`click`, saveHandler);
      editBtn.addEventListener(`click`, editHandler);
      deleteBtn.addEventListener(`click`, deleteHandler);
    }
  }

  function saveHandler() {
    
  }
  function editHandler() {

  }
  function deleteHandler() {

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
