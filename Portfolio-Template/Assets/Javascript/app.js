/**
 * Jquery plugins activate;
 */
$(document).ready(function () {
  //magnific popup activation code:
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  //counter-up activation code:
  $(".counter-up").counterUp({
    delay: 10,
    time: 1000,
  });

  //slick slider activation code:
  $(".testimonials").slick({
    arrows: false,
    autoplay: true,
    loop: true,
    dots: true,
  });
});

//sticky menu code:
$(window).load(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 20) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }
  });
});
