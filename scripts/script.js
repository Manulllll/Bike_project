const menuBurgerButton = document.querySelector('.header__menu');
const menuCloseIcon = document.querySelector ('.menu-popup__close-icon');
const menuPopup = document.querySelector ('.menu-popup');

menuBurgerButton.addEventListener ("click", () => {
  menuPopup.classList.add('menu-popup_opened');
})

menuCloseIcon.addEventListener("click", () => {
  menuPopup.classList.remove('menu-popup_opened');
})

