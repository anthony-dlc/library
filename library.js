const openForm = document.querySelector(".call-form");
const formContainer = document.querySelector(".form-container");
const closeF = document.querySelector(".close-form");
const buttonAddBook = document.querySelector(".add-book");
const bookAuthor = document.querySelector("#book-author");
const bookTitle = document.querySelector("#book-title");
const bookPages = document.querySelector("#book-pages");
const readItOrNot = document.querySelectorAll(".book-read");
// const listOfBooksRead = document.querySelector(".read-it");

const library = [];

function Book(author, title, pages, readIt, id) {
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
    alert(`${bookTitle.value} successfully added`);
    clearCampus();
    showBook();
    console.log(library.at(-1));
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

// function showBook() {
//   const lastBook = library.at(-1);
//   const listedBook = document.createElement("li");
//   listedBook.textContent = `${lastBook.title} by ${lastBook.author}, ${lastBook.pages} pages`;
//   listOfBooksRead.appendChild(listedBook);
// }
