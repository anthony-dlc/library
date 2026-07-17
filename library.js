const library = [];

class Book {
  constructor(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    this.id = crypto.randomUUID();
  }

  #verifyBook() {
    if (
      this.author === undefined ||
      this.title === undefined ||
      this.pages === undefined ||
      this.status === undefined
    )
      throw new Error("Fill all campus");
  }

  addBook() {
    this.#verifyBook();
    library.push({ ...this });
  }

  eliminateBook() {
    const bookIndex = library.findIndex((i) => i.id === this.id);
    if (bookIndex !== -1) {
      library.splice(bookIndex, 1);
    } else {
      console.error("Book not found");
    }
  }

  changeBookStatus() {
    const bookIndex = library.findIndex((i) => i.id === this.id);
    if (library[bookIndex].status === "read it") {
      library[bookIndex].status = "Not read it";
    } else {
      library[bookIndex].status = "read it";
    }
  }
}

const displayControls = (() => {
  const formContainer = document.querySelector(".form-container");
  const bookAuthor = document.querySelector("#book-author");
  const bookTitle = document.querySelector("#book-title");
  const bookPages = document.querySelector("#book-pages");
  const bookStatus = document.querySelectorAll(".book-status");
  const bookContainer = document.querySelector(".books-container");
  const btnCreateBook = document.querySelector(".create-book");
  const btnCallForm = document.querySelector(".call-form");
  const btnCloseForm = document.querySelector(".close-form");

  const getStatusValues = () => {
    let status;
    bookStatus.forEach((radio) => {
      if (radio.checked) {
        status = radio.value;
      }
    });
    return status;
  };

  const emptyInputs = () => {
    bookAuthor.value = "";
    bookTitle.value = "";
    bookPages.value = "";
  };

  const addBookToLibrary = () => {
    const statusValue = getStatusValues();
    const newBook = new Book(
      bookAuthor.value,
      bookTitle.value,
      bookPages.value,
      statusValue,
    );
    newBook.addBook();
    console.log(library);
  };

  const createDisplayBook = () => {
    const bookInArray = library.at(-1);

    const bookCard = document.createElement("div");
    const svgContainer = document.createElement("div");
    const author = document.createElement("p");
    const title = document.createElement("p");
    const pages = document.createElement("p");
    const status = document.createElement("p");
    const buttonsContainer = document.createElement("div");
    const btnEliminate = document.createElement("button");
    const btnChangeStatus = document.createElement("button");

    bookCard.classList.add("book");
    bookCard.id = bookInArray.id;
    svgContainer.classList.add("svg-container");
    buttonsContainer.classList.add("buttons-container");

    buttonsContainer.append(btnEliminate);
    buttonsContainer.append(btnChangeStatus);

    svgContainer.innerHTML = `
      <svg class="father-svg">
        <use href="#book-icon" />
      </svg>`;
    author.textContent = `Author: ${bookInArray.author}`;
    title.textContent = `Title: ${bookInArray.title}`;
    pages.textContent = `Pages: ${bookInArray.pages}`;
    status.textContent = `Status: ${bookInArray.status}`;
    btnEliminate.textContent = "Eliminate";
    btnChangeStatus.textContent = "Change Status";

    btnEliminate.addEventListener("click", () => {
      const bookIndex = library.findIndex(
        (bookId) => bookId.id === bookCard.id,
      );
      library.splice(bookIndex, 1);
      bookCard.remove();
    });

    btnChangeStatus.addEventListener("click", () => {
      if (bookInArray.status === "Read it") {
        bookInArray.status = "Not read it";
        status.textContent = `Status: ${bookInArray.status}`;
      } else {
        bookInArray.status = "Read it";
        status.textContent = `Status: ${bookInArray.status}`;
      }
    });

    bookCard.append(svgContainer);
    bookCard.append(author);
    bookCard.append(title);
    bookCard.append(pages);
    bookCard.append(status);
    bookCard.append(buttonsContainer);

    bookContainer.append(bookCard);
  };

  const verifyInputs = () => {
    const authorVerifyValue = bookAuthor.value.trim() === "";
    const titleVerifyValue = bookTitle.value.trim() === "";
    const pagesVerifyValue = bookPages.value.trim() === "";
    if (authorVerifyValue || titleVerifyValue || pagesVerifyValue) {
      alert("Fill all campus");
      return false;
    } else {
      formContainer.style.display = "none";
      return true;
    }
  };

  btnCloseForm.addEventListener("click", () => {
    emptyInputs();
    formContainer.style.display = "none";
  });

  btnCallForm.addEventListener("click", () => {
    formContainer.style.display = "grid";
  });

  btnCreateBook.addEventListener("click", () => {
    const verifyInputsResult = verifyInputs();
    if (verifyInputsResult === true) {
      addBookToLibrary();
      createDisplayBook();
      emptyInputs();
    }
  });
})();
