const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navMenu.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navClose.classList.remove("show-menu");
});
