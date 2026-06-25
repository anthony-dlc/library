const openForm = document.querySelector(".call-form");
const formContainer = document.querySelector(".form-container");
const closeForm = document.querySelector(".close-form");

openForm.addEventListener("click", ()=>{
  formContainer.style.display = "flex"
})

closeForm.addEventListener("click", () => {
  formContainer.style.display = "none";
});
