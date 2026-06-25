const openForm = document.querySelector(".call-form");
const formContainer = document.querySelector(".form-container");
const closeForm = document.querySelector(".close-form");

const library = [];

function Book(author, title, pages, readIt, id) {
  ((this.author = author),
    (this.title = title),
    (this.pages = pages),
    (this.readIt = readIt),
    (this.id = crypto.randomUUID()));
}

const AtomicHabist = new Book("James Clear", "Atomic Habits", 320, "yes");

const doIt = new Book("Anthony de la cruz", "Do it", 300, "yes");

openForm.addEventListener("click", () => {
  formContainer.style.display = "flex";
});

closeForm.addEventListener("click", () => {
  formContainer.style.display = "none";
});
