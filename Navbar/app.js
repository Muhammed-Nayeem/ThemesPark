// nav toggler button active code:
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
  navToggler.classList.toggle("active");
  const navBar = document.querySelector(".navbar");
  navBar.classList.toggle("open");
  if (navBar.classList.contains("open")) {
    navBar.style.maxHeight = navBar.scrollHeight + "px";
  } else {
    navBar.removeAttribute("style");
  }
}
