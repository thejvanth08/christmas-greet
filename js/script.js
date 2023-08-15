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
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

// Parallax
// accepts class as arg -> passed to constructor
// the elements with "parallax" class is converted into parallax objects
let Parallax = new Rellax(".parallax");

// Gsap animations
gsap.from(".home-village", 1.2, { opacity: 0, y: 100, delay: 0.1 });
gsap.from(".home-pine", 1.2, { opacity: 0, y: 150, delay: 0.3 });
gsap.from(".home-moutain-2", 1.2, { opacity: 0, x: 150, delay: 0.5 });
gsap.from(".home-moutain-3", 1.2, { opacity: 0, x: -150, delay: 0.6 });
gsap.from(".home-moutain-1", 1.2, { opacity: 0, y: 250, delay: 0.7 });
gsap.from(". home-moon", 1.2, { opacity: 0, y: 200, delay: 0.8 });
gsap.from(". home-trineo", 1.2, { opacity: 0, x: -200, delay: 0.8 });
gsap.from(". home-title", 1.2, { opacity: 0, y: -60, delay: 1 });

