let menu = document.querySelector(".nav_menu");
let menuBtn = document.querySelector(".header-icon");
let menuBtnIcon = document.querySelector(".header-icon i");

menuBtn.addEventListener("click", function () {
  if (menuBtnIcon.classList.contains("fa-bars")) {
    menu.style.left = "0";
    menuBtnIcon.classList = "fa fa-times";
  }
  else{
    menu.style.left='-18rem';
    menuBtnIcon.classList='fa fa-bars'
  }
});
