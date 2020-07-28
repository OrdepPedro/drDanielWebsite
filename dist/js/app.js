// Sticky navbar
const navbar = document.querySelector(".navbar");

window.onload = navbar.classList.remove("top");

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    navbar.classList.add("top");
  } else {
    navbar.classList.remove("top");
  }
};
