// Sticky navbar
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar ul a");

window.onload = navbar.classList.remove("top");

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    navbar.classList.add("top");
  } else {
    navbar.classList.remove("top");
  }
};

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 100;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  e.preventDefault();
}
