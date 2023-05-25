const menu = document.querySelector("#mobile-menu");
const menulinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menulinks.classList.toggle("active");
});
// Close menu when any menu option is selected
const menuOptions = document.querySelectorAll(".navbar__menu li a");

menuOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    menu.classList.remove("is-active");
    menulinks.classList.remove("active");
  });
});
