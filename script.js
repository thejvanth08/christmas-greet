const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

const scrollHeader = () => {
  const header = document.getElementById("header");
  // when window is scrolled vertically i.e greater than 50,
  // add the scroll class to the header tag
  // console.log(this); this refers window object which is calling the function as a cb
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

navClose.addEventListener("click", () => {
  console.log("close");
  navMenu.classList.toggle("show-menu");
});

window.addEventListener("scroll", scrollHeader);


// Show scroll up (when to show it)
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                      : scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);