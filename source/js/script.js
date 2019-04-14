var navMain = document.querySelector(".nav");
var bodyMain = document.querySelector(".body");
var navToggle = document.querySelector(".nav__toggle");


bodyMain.classList.remove("body--nojs");

navToggle.addEventListener("click", function() {
  if (bodyMain.classList.contains("body--closed")) {
    bodyMain.classList.remove("body--closed");
    bodyMain.classList.add("body--opened");
  } else {
    bodyMain.classList.add("body--closed");
    bodyMain.classList.remove("body--opened");
  }
});
