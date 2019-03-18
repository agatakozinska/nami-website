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

document.addEventListener("DOMContentLoaded", () => {

  const swipperButton = document.querySelector('.swipper__button');

  swipperButton.addEventListener('click', () => {
    const slides = document.querySelectorAll('.swiper-slide');
    const pagination = document.querySelector('.swiper-pagination');

    slides.forEach(slide => {
      const activeSlide = slide.classList.contains('swiper-slide-active');
      const imageSlide = slide.children[1];
      
      if(activeSlide) {
        imageSlide.classList.add('active');
        pagination.classList.add('hidden');
      };

      mySwiper.on('slideChange', () => {
        const activeInnerSlide = imageSlide.classList.contains('active');
        if (activeInnerSlide) {
          imageSlide.classList.remove('active');
          pagination.classList.remove('hidden');
        }
      });
    })
  })

  const menu = document.querySelector('.header__menu');
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

  const links = document.querySelectorAll('.nav__item');
  const linksArray = [...links];

  for (let i = 0; i < linksArray.length; i++) {
    linksArray[i].addEventListener("click", function () {
      document.documentElement.classList.remove("no-scroll");
      menu.classList.remove(navVisible);
    });
  }

});
