// Sticky navbar var
const navbar = document.querySelector(".navbar");
// Smooth scroll var
const links = document.querySelectorAll(".navbar ul a");
// Mobile calls var
const phones = document.querySelectorAll(".phone");
// Check width var
const screen = window.screen.width;

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

// Phone method on mobile
if (screen < 768) {
  phones.forEach((e) => {
    e.setAttribute("href", "tel:+55(91)98725-4427");
    e.style.color = "#333";
  });
} else {
  phones.forEach((e) => {
    e.removeAttribute("href");
    e.style.color = "#333";
  });
}
