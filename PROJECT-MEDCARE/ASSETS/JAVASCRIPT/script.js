/**
 * responsive navbar:
 */
let menubar = document.querySelector(".menu");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  menubar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  menubar.classList.remove("active");
};

/**
 * to top scroll button js code:
 */
let calcScrollValue = () => {
  let scrollProgress = document.querySelector("#progress");
  let progressValue = document.querySelector("#progressValue");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#16a085 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/**
 * slick-slider code:
 */
 $(document).ready(function(){
   //counter area activated code:
   $(".counter-increment").counterUp();
   //client area slider activate code:
  $('.client-box').slick({
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    infinite: true,
    loop: true,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //blog area slider activate code:
  $('.blogs-box').slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    infinite: true,
    loop: true,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

/**
 * footer section: copyright year dynamic code:
 */
let dynamicYear = document.querySelector("#year");
let objectDate = new Date();
dynamicYear.textContent = objectDate.getFullYear();
