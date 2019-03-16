require('normalize.css/normalize.css');

import Swiper from 'swiper';
import "swiper/dist/css/swiper.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import './index.scss';

AOS.init({
  offset: 10,
  duration: 800,
  easing: 'ease-in-sine',
  delay: 500,
});

const mySwiper = new Swiper(".swiper-container", {
  loop: true,
  // direction: 'vertical',
  grabCursor: true,
  speed: 1000,
  autoplay: false,
  effect: "slide",
  mousewheelControl: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const swipperButton = document.querySelector('.swipper__button');

swipperButton.addEventListener('click', () => {
  const slides = document.querySelectorAll('.swiper-slide');
  slides.forEach(slide => {
    const activeSlide = slide.classList.contains('swiper-slide-active');
    if(activeSlide) {
      slide.children[1].classList.add('active');
    }
  })
})


document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector('.header__menu');

  window.addEventListener('scroll', () => {
    const menuHeight = menu.offsetHeight;
    const pageHeight = window.scrollY;

    if (pageHeight > menuHeight) {
      menu.classList.add('scroll');
    } else {
      menu.classList.remove('scroll');
    }
  });


  const button = document.querySelector('.hamburger__button');
  const navVisible = 'menu--open';

  button.addEventListener('click', () => {
    menu.classList.toggle(navVisible);
    stopScroll();
  });

  function stopScroll() {
    if (menu.classList.contains(navVisible)) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  }

  const links = document.querySelectorAll('.nav__list__item');
  const linksArray = [...links];

  for (let i = 0; i < linksArray.length; i++) {
    linksArray[i].addEventListener("click", function () {
      document.documentElement.classList.remove("no-scroll");
      menu.classList.remove(navVisible);
    });
  }

});
