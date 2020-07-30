// Mobile calls var
const phones = document.querySelectorAll(".phone");
// Check width var
const screen = window.screen.width;

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
