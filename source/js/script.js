var navMain = document.querySelector(".nav");
var bodyMain = document.querySelector(".body");
var navToggle = document.querySelector(".nav__toggle");

var form  = document.querySelector("form");
var error = document.querySelector(".main-form__invalid");
var surname = document.querySelector("[name=surname]");
var name = document.querySelector("[name=name]");

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

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!surname.value || !name.value) {
    console.log("Нужно ввести имя, фамилию и почту");
    error.classList.remove("main-form__invalid--invisible");
    error.classList.add("main-form__invalid--visible");
  } else {
    this.submit()
  }
});
