function attachEvents() {
  const phoneBookContainer = document.getElementById(`phonebook`);
  const loadBtn = document.getElementById(`btnLoad`);
  const BASE_URL = `http://localhost:3030/jsonstore/phonebook/`;
  const personInput = document.getElementById(`person`);
  const phoneInput = document.getElementById(`phone`);
  const createBtn = document.getElementById(`btnCreate`);

  loadBtn.addEventListener(`click`, loadPhoneBookHandler);
  createBtn.addEventListener(`click`, createPhoneBookHandler);

  async function loadPhoneBookHandler() {
    try {
      const phoneBookRes = await fetch(BASE_URL);
      let phoneBookData = await phoneBookRes.json();
      phoneBookData = Object.values(phoneBookData);
    phoneBookContainer.innerHTML = ''
      for (const { phone, person, _id } of phoneBookData) {
        const li = document.createElement(`li`);
        const button = document.createElement(`button`);
        button.textContent = `Delete`;
        button.id = _id
        button.addEventListener(`click`, deletePhoneBookHandler)
        li.innerHTML = `${person}: ${phone}`;
        li.appendChild(button);
        phoneBookContainer.appendChild(li);
      }
    } catch (err) {
      console.error(err);
    }
  }

  function createPhoneBookHandler() {
    const person = personInput.value;
    const phone = phoneInput.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ person, phone }),
    };
    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadPhoneBookHandler();
        personInput.value = ''
        phoneInput.value = ''
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function deletePhoneBookHandler(e) {
    const id = e.currentTarget.id
    httpHeaders ={
        method: `DELETE`
    }

    fetch(`${BASE_URL}${id}`, httpHeaders)
    .then((res) => res.json())
    .then(loadPhoneBookHandler)
    .catch((err) => {
        console.error(err);
    })

  }
}

attachEvents();
