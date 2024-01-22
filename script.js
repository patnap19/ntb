const closeMenuButton = document.querySelector(".close-nav-btn__container");
const burgerButton = document.querySelector(".menu-burger-container");
const mobileMenu = document.querySelector(".main-nav");
closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("main-nav-active");
});

burgerButton.addEventListener("click", () => {
  mobileMenu.classList.add("main-nav-active");
});

const menuButtons = document.querySelectorAll(".nav__element a");

menuButtons[0].addEventListener("click", (e) => {
  e.preventDefault();
  const homeStart = document.querySelector(".header-container").offsetTop;
  scroll({
    top: homeStart,
    behavior: "smooth",
  });

  if (mobileMenu.classList.contains("main-nav-active")) {
    mobileMenu.classList.remove("main-nav-active");
  }
});

menuButtons[1].addEventListener("click", (e) => {
  e.preventDefault();
  const aboutStart = document.querySelector(".about-us").offsetTop;
  scroll({
    top: aboutStart,
    behavior: "smooth",
  });

  if (mobileMenu.classList.contains("main-nav-active")) {
    mobileMenu.classList.remove("main-nav-active");
  }
});

menuButtons[2].addEventListener("click", (e) => {
  e.preventDefault();
  const productStart = document.querySelector(".product").offsetTop;
  scroll({
    top: productStart,
    behavior: "smooth",
  });

  if (mobileMenu.classList.contains("main-nav-active")) {
    mobileMenu.classList.remove("main-nav-active");
  }
});

menuButtons[3].addEventListener("click", (e) => {
  e.preventDefault();
  const contactStart = document.querySelector(".contact").offsetTop;
  scroll({
    top: contactStart,
    behavior: "smooth",
  });

  if (mobileMenu.classList.contains("main-nav-active")) {
    mobileMenu.classList.remove("main-nav-active");
  }
});

const contactBtnInHeader = document.querySelector(".contact--button");
contactBtnInHeader.addEventListener("click", (e) => {
  e.preventDefault();
  const contactStart = document.querySelector(".contact").offsetTop;
  scroll({
    top: contactStart,
    behavior: "smooth",
  });
});
