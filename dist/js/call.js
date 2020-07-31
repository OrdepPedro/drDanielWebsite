// Mobile calls var
const phone1 = document.querySelector(".phone1");
const phone2 = document.querySelector(".phone2");
// Check width var
const screen = window.screen.width;

// Phone method on mobile

if (screen < 768) {
  phone1.setAttribute("href", "tel:(91)98725-4427");
  phone2.setAttribute("href", "tel:(91)3724-3769");
  phone1.style.color = "#333";
  phone2.style.color = "#333";
} else {
  phone1.removeAttribute("href");
  phone2.removeAttribute("href");
  phone1.style.color = "#333";
  phone2.style.color = "#333";
}
