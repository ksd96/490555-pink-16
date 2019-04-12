var navMain = document.querySelector(".nav");
var photoBox = document.querySelector(".user-photos__box-title");
var navToggle = document.querySelector(".nav__toggle");

navMain.classList.remove("nav--nojs");
photoBox.classList.remove("user-photos__box-title--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("nav--closed")) {
    navMain.classList.remove("nav--closed");
    navMain.classList.add("nav--opened");
    photoBox.classList.remove("user-photos__box-title--big");
    photoBox.classList.add("user-photos__box-title--small");
  } else {
    navMain.classList.add("nav--closed");
    navMain.classList.remove("nav--opened");
    photoBox.classList.add("user-photos__box-title--big");
    photoBox.classList.remove("user-photos__box-title--small");
  }
});
