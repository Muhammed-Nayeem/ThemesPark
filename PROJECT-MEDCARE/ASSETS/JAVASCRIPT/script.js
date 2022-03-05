/**
 * responsive navbar:
 */
let menubar = document.querySelector(".menu");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  menubar.classList.toggle("active");
}

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  menubar.classList.remove("active");
}
