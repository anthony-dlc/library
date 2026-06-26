const openForm = document.querySelector(".call-form");
const formContainer = document.querySelector(".form-container");
const closeF = document.querySelector(".close-form");
const buttonAddBook = document.querySelector(".add-book");
const bookAuthor = document.querySelector("#book-author");
const bookTitle = document.querySelector("#book-title");
const bookPages = document.querySelector("#book-pages");
const readItOrNot = document.querySelectorAll(".book-read");

const library = [];

function closeForm() {
  formContainer.style.display = "none";
}

function clearCampus() {
  bookAuthor.value = "";
  bookTitle.value = "";
  bookPages.value = "";
}

function Book(author, title, pages, readIt, id) {
  ((this.author = author),
    (this.title = title),
    (this.pages = pages),
    (this.readIt = readIt),
    (this.id = crypto.randomUUID()));
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
    alert(`${bookTitle.value} successfully added`);
    clearCampus();
    console.log(library.at(-1));
  } else {
    alert("Fill all campus");
  }
});
