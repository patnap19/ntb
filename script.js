const closeMenuButton = document.querySelector(".close-nav-btn__container");
const burgerButton = document.querySelector(".menu-burger-container");
const mobileMenu = document.querySelector(".main-nav");
closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("main-nav-active");
});

burgerButton.addEventListener("click", () => {
  mobileMenu.classList.add("main-nav-active");
});
