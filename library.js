const openForm = document.querySelector(".call-form");
const formContainer = document.querySelector(".form-container");
const closeF = document.querySelector(".close-form");
const buttonAddBook = document.querySelector(".add-book");
const bookAuthor = document.querySelector("#book-author");
const bookTitle = document.querySelector("#book-title");
const bookPages = document.querySelector("#book-pages");
const readItOrNot = document.querySelectorAll(".book-read");
const tableOfBooks = document.querySelector(".read-it");
const tablesBody = document.querySelector("tbody");
const tableRow = document.querySelector(".book-details");
const tableData = document.querySelectorAll("td");

const library = [];

function Book(author, title, pages, readIt) {
  ((this.author = author),
    (this.title = title),
    (this.pages = pages),
    (this.readIt = readIt),
    (this.id = crypto.randomUUID()));
}

openForm.addEventListener("click", () => {
  formContainer.style.display = "flex";
});

closeF.addEventListener("click", () => {
  closeForm();
});

buttonAddBook.addEventListener("click", () => {
  if (
    bookAuthor.value.trim() !== "" &&
    bookTitle.value.trim() !== "" &&
    bookPages.value.trim() !== ""
  ) {
    addNewBook();
    alert(`${bookTitle.value} was successfully added`);
    clearCampus();
    showBook();
  } else {
    alert("Fill all campus");
  }
});

function closeForm() {
  formContainer.style.display = "none";
}

function clearCampus() {
  bookAuthor.value = "";
  bookTitle.value = "";
  bookPages.value = "";
}

function addNewBook() {
  const author = bookAuthor.value;
  const title = bookTitle.value;
  const pages = bookPages.value;
  let read;
  readItOrNot.forEach((r) => {
    if (r.checked) {
      read = r.value;
    }
  });

  const newBook = new Book(author, title, pages, read);
  library.push(newBook);
}

function eliminateBookFromLibrary(btn) {
  btn.addEventListener("click", () => {
    const bookDisplayContainer = btn.closest("tr");
    const bookIndex = library.findIndex(
      (book) => book.id === bookDisplayContainer.id,
    );
    const hasIt = library.find((book) => book.id === bookDisplayContainer.id);

    if (hasIt) {
      library.splice(bookIndex, 1);
      bookDisplayContainer.remove();
    }
  });
}

function changeBookStatus(btn, state) {
  btn.addEventListener("click", () => {
    const bookDisplayContainer = btn.closest("tr");
    const bookFound = library.find(
      (book) => book.id === bookDisplayContainer.id,
    );
    if (bookFound.readIt === "yes") {
      bookFound.readIt = "no";
      state.textContent = bookFound.readIt;
    } else {
      bookFound.readIt = "yes";
      state.textContent = bookFound.readIt;
    }
    console.log(bookFound.id);
  });
}

function showBook() {
  const lastBook = library.at(-1);

  const bookDescription = document.createElement("tr");
  const authorAndTitle = document.createElement("td");
  const numberOfPages = document.createElement("td");
  const status = document.createElement("td");
  const changeStatus = document.createElement("td");
  const eliminateBook = document.createElement("td");
  const changeStatusButton = document.createElement("button");
  const eliminateBookButton = document.createElement("button");

  bookDescription.style.display = "table-row";

  bookDescription.id = `${lastBook.id}`;
  authorAndTitle.classList.add("author-title");
  numberOfPages.classList.add("pages");
  status.classList.add("status");
  changeStatusButton.classList.add("change-status");
  eliminateBookButton.classList.add("eliminate");

  authorAndTitle.textContent = `${lastBook.title} by ${lastBook.author}`;
  numberOfPages.textContent = `${lastBook.pages}`;
  status.textContent = `${lastBook.readIt}`;
  changeStatusButton.textContent = "Change Status";
  eliminateBookButton.textContent = "Eliminate";

  changeStatus.appendChild(changeStatusButton);
  eliminateBook.appendChild(eliminateBookButton);

  bookDescription.appendChild(authorAndTitle);
  bookDescription.appendChild(numberOfPages);
  bookDescription.appendChild(status);
  bookDescription.appendChild(changeStatus);
  bookDescription.appendChild(eliminateBook);

  tablesBody.appendChild(bookDescription);

  tableOfBooks.appendChild(tablesBody);

  changeBookStatus(changeStatusButton, status);
  eliminateBookFromLibrary(eliminateBookButton);
}
