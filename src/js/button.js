const dropElement = document.querySelector("#nav-drop");

function toggleNav() {
  dropElement.classList.toggle("show");
  setTimeout(() => {
    dropElement.classList.toggle("show-opa");
  }, 500);
}
