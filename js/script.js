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

// Scroll reveal animations
// creating object, props will be common to all elements to which this anime is applied
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 500,
});

sr.reveal(".about-data, .celebrate-church", {
  origin: "right",
});
sr.reveal(".about-img, .celebrate-data", { origin: "left" });
sr.reveal(".send-card", { interval: 100 });
sr.reveal(".footer");

// Parallax animations
// accepts class as arg -> passed to constructor
// the elements with "parallax" class is converted into parallax objects
let Parallax = new Rellax(".parallax");

// Gsap animations
gsap.from(".home-village", 1.2, { opacity: 0, y: 100, delay: 0.1 });
gsap.from(".home-pine", 1.2, { opacity: 0, y: 150, delay: 0.3 });
gsap.from(".home-moutain-2", 1.2, { opacity: 0, x: 150, delay: 0.5 });
gsap.from(".home-moutain-3", 1.2, { opacity: 0, x: -150, delay: 0.6 });
gsap.from(".home-moutain-1", 1.2, { opacity: 0, y: 250, delay: 0.7 });
gsap.from(".home-moon", 1.2, { opacity: 0, y: 200, delay: 0.8 });
gsap.from(".home-trineo", 1.2, { opacity: 0, x: -200, delay: 0.8 });
gsap.from(".home-title", 1.2, { opacity: 0, y: -60, delay: 1 });

// Particles js animations
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 600,
        density: {
          enable: true,
          value_area: 2441.9062623079944,
        },
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.33,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 7.877116975187079,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5,
          },
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});
