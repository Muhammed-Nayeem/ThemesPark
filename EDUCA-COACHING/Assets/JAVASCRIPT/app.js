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

/* courses: swiper slider activation */
const swiperC = new Swiper(".course__slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/* teachers: swiper slider activation code */
const swiperT = new Swiper(".teachers__slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/* reviews: swiper js slider activation code */
const swiperR = new Swiper(".reviews__slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/* footer: dynamic year activation code */
const yearElement = document.querySelector(".year");
const currentYear = new Date();
yearElement.innerHTML = currentYear.getFullYear();

/* scroll button: to top scroll btn activation code */
let calcScrollValue = () => {
  let scrollProgress = document.querySelector("#progress");
  let ProgressValue = document.querySelector("#progress-value");
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
  scrollProgress.style.background = `conic-gradient(#00E77F ${scrollValue}%, #4b4b4b ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/* jquery counter up plugin activation code */
$('.counter-up').counterUp({
  delay: 10,
  time: 1000,
});
