// Sticky navbar var
const navbar = document.querySelector(".navbar");
// Smooth scroll var
const links = document.querySelectorAll(".navbar ul a");

// console.log(screen);

// Transparent navbar
window.onload = navbar.classList.remove("top");

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    navbar.classList.add("top");
  } else {
    navbar.classList.remove("top");
  }
};

// Smooth Scroll
for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 50;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  e.preventDefault();
}
