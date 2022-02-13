//Sticky Nav Function: Using Jquery:
// $(window).on("scroll", function () {
//   if ($(this).scrollTop() > 25) {
//     $(".header-area").addClass("sticky");
//   } else {
//     $(".header-area").removeClass("sticky");
//   }
// });

/**
 * StickyNav: Using JavaScript;
 */
const navBar = document.querySelector(".header-area");
window.onscroll = () => {
  let scrollNav = window.scrollY;
  if (scrollNav >= 25) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

/**
 * Jquery Function For Plugins Activate:
 */
$(document).ready(function () {
  //one page nav scroll:
  $("#nav").onePageNav({
    currentClass: "current",
  });

  //magnific popup images:
  $(".magnific-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  //magnific popup videos:
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  //counter up:
  $(".counter-increment").counterUp();

  //slick slider: testimonials
  $(".testimonial").slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        }
      }
    ]
  });
});
