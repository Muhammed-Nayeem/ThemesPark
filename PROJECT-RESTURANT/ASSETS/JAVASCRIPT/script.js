/**
 * Sticky Nav Bar:
 */
const stickyHeader = document.querySelector(".header-area");

window.onscroll = () => {
  let scrollHeight = window.scrollY;
  if (scrollHeight >= 25) {
    stickyHeader.classList.add("stickyNav");
  } else {
    stickyHeader.classList.remove("stickyNav");
  }
};

/**
 * Jquery Function:
 */
$(document).ready(function () {
  //banner slider activate:
  $(".banner-area").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    loop: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
  });

  //testimonial slider activate:
  $(".testimonial").slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    loop: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
