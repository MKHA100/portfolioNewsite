"use strict";

document
  .getElementById("mobile-nav-toggle")
  .addEventListener("click", function () {
    if (
      document.querySelector(".body").classList.contains("mobile-nav-active")
    ) {
      document.querySelector(".body").classList.remove("mobile-nav-active");
    } else {
      document.querySelector(".body").classList.add("mobile-nav-active");
    }
  });

setTimeout(() => {
  const dropdown = document.querySelectorAll(".dropdown-icon");
  const sf = document.querySelectorAll(".sf-with-ul");
  const content = document.querySelectorAll(".dropdown-content");

  for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function (event) {
      const isClickInsideElement = dropdown[i].contains(event.target);

      if (dropdown[i].classList.contains("lnr-chevron-down")) {
        dropdown[i].classList.remove("lnr-chevron-down");
        dropdown[i].classList.add("lnr-chevron-up");

        sf[i].classList.add("menu-item-active");
        content[i].style.display = "block";
      } else {
        dropdown[i].classList.add("lnr-chevron-down");
        dropdown[i].classList.remove("lnr-chevron-up");

        sf[i].classList.remove("menu-item-active");
        content[i].style.display = "none";
      }
    }),
      100;
  }
});

document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    document.querySelector(".body").classList.contains("mobile-nav-active")
  ) {
    if (
      document.querySelector(".body").classList.contains("mobile-nav-active")
    ) {
      document.querySelector(".body").classList.remove("mobile-nav-active");
    } else {
      document.querySelector(".body").classList.add("mobile-nav-active");
    }
  }
});

if (window.outerWidth < 990) {
  document.querySelector(".banner-right").classList.remove("align-self-end");
} else {
  document.querySelector(".banner-right").classList.add("align-self-end");
}

window.addEventListener("resize", function (event) {
  if (window.outerWidth < 760) {
    document.querySelector(".fullscreen").classList.remove("row");
    document.querySelector(".fullscreen").classList.add("new-row");
  } else {
    document.querySelector(".fullscreen").classList.add("row");
    document.querySelector(".fullscreen").classList.remove("new-row");
  }
});

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${110 * (i - slide)}%)`;
    });
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

// Testing

// const sections = document.querySelectorAll("section");
// console.log(sections);
// const navLi = document.querySelectorAll(
// "header .container .row-nav .nav-menu-for-active ul li"
// );
// console.log(navLi);
// window.onscroll = () => {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (Window.pageYOffset >= sectionTop - 60) {
//       current = section.getAttribute("id");
//       console.log(current);
//     }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("menu-active");
//     if (li.classList.contains(current)) {
//       li.classList.add("menu-active");
//     }
//   });
// };
