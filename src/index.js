require('normalize.css/normalize.css');
import './index.scss';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 10,
  duration: 800,
  easing: 'ease-in-sine',
  delay: 500,
});

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
