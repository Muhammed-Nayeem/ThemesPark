/* navbar toggler button activation code */
const navToggler = document.querySelector(".header__navToggler");
const navToggle = () => {
  navToggler.classList.toggle("active");
  const nav = document.querySelector(".header__navbar");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
};
navToggler.addEventListener("click", navToggle);
