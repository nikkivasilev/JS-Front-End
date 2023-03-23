function attachEvents() {
  const loadBooks = document.getElementById(`loadBooks`);
  const booksContainer = document.querySelector(`table > tbody`);
  const [titleInput, AuthorInput] = Array.from(document.querySelectorAll(`#form > input`));
  const submitBtn = document.querySelector(`#form > button`);
  const BASE_URL = `http://localhost:3030/jsonstore/collections/books/`;
  const formHeader = document.querySelector(`#form > h3`)
  let editBookId = null
  loadBooks.addEventListener(`click`, loadAllBooksHandler);
  submitBtn.addEventListener(`click`, submitFormHandler);

  async function loadAllBooksHandler() {
    booksContainer.innerHTML = "";
    const booksRes = await fetch(BASE_URL);
    const booksData = await booksRes.json();
    for (const bookId in booksData) {
      const { author, title } = booksData[bookId];
      const tableRow = document.createElement(`tr`);
      const titleCol = document.createElement(`td`);
      const authorCol = document.createElement(`td`);
      const btnsCol = document.createElement(`td`);
      const editBtn = document.createElement(`button`);
      const deleteBtn = document.createElement(`button`);
      titleCol.textContent = title;
      authorCol.textContent = author;
      editBtn.textContent = `Edit`;
      editBtn.addEventListener(`click`, () => {
        editBookId = bookId
        formHeader.textContent = `Edit FORM`
        submitBtn.textContent = `Save`
        titleInput.value = title
        AuthorInput.value = author
      })

      deleteBtn.textContent = `Delete`;
      deleteBtn.id = bookId
      deleteBtn.addEventListener(`click`, deleteBookHandler)
      tableRow.appendChild(titleCol);
      tableRow.appendChild(authorCol);
      btnsCol.appendChild(editBtn);
      btnsCol.appendChild(deleteBtn);
      tableRow.appendChild(btnsCol);
      booksContainer.appendChild(tableRow);
    }
  }

  async function submitFormHandler() {
    const title = titleInput.value;
    const author = AuthorInput.value;

    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ title, author }),
    };
    let url = BASE_URL
    if (formHeader.textContent === `Edit FORM`) {
      httpHeaders.method = `PUT`
      url += editBookId
    }


    const resData = await fetch(url, httpHeaders);
    loadAllBooksHandler();
    if (formHeader.textContent === `Edit FORM`) {
        formHeader.textContent = `FORM`
        submitBtn.textContent = `Submit`
    }
    titleInput.value = ''
    AuthorInput.value = ''
  }

  async function deleteBookHandler() {
    const id = this.id
    const httpHeaders = {
      method: 'DELETE'
    };

    await fetch(BASE_URL + id, httpHeaders)
    loadAllBooksHandler()

  }

}

attachEvents();
