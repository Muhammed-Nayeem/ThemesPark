let navBar = document.querySelector(".header-area");

window.onscroll = () => {
  let scrollHeight = window.scrollY;
  if (scrollHeight >= 25) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
};
