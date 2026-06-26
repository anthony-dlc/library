const openForm = document.querySelector(".call-form");
const formContainer = document.querySelector(".form-container");
const closeF = document.querySelector(".close-form");
const addBook = document.querySelector(".add-book");
const bookAuthor = document.querySelector("#book-author");
const bookTitle = document.querySelector("#book-title");
const bookPages = document.querySelector("#book-pages");
const readItOrNot = document.querySelectorAll(".book-read");

const library = [];

function closeForm() {
  formContainer.style.display = "none";
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

// const AtomicHabist = new Book("James Clear", "Atomic Habits", 320, "yes");

// const doIt = new Book("Anthony de la cruz", "Do it", 300, "yes");

openForm.addEventListener("click", () => {
  formContainer.style.display = "flex";
});

closeF.addEventListener("click", () => {
  closeForm();
});

addBook.addEventListener("click", () => {
  addNewBook();
  console.log(library);
  // closeForm();
});
