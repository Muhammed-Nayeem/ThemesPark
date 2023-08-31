//sticky navbar using jquery:
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 20) {
    $(".header-area").addClass("active");
  } else {
    $(".header-area").removeClass("active");
  }
});

//sticky navbar using javascript:
// let header = document.querySelector(".header-area");
// window.onscroll = () => {
//   let scrollTop = window.scrollY;
//   if (scrollTop > 20) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// };
// window.onload = () => {
//   let scrollTop = window.scrollY;
//   if (scrollTop > 20) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// };

//jquery plugins activation code:
$(document).ready(function () {
  //one page nav scroll:
  $("#nav").onePageNav({
    currentClass: "current",
  });
});
