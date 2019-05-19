var navMain = document.querySelector(".nav");
var bodyMain = document.querySelector(".body");
var navToggle = document.querySelector(".nav__toggle");

var form  = document.querySelector("form");
var error = document.querySelector(".main-form__invalid");
var ok = document.querySelector(".main-form__valid");
var surname = document.querySelector("[name=surname]");
var name = document.querySelector("[name=name]");
var buttonError = document.querySelector(".main-form__invalid-button");
var buttonOk = document.querySelector(".main-form__valid-button");

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
  if (!surname.value) {
    console.log("Нужно ввести имя, фамилию и почту");
    error.classList.remove("main-form__invalid--invisible");
    error.classList.add("main-form__invalid--visible");
  } else {
    ok.classList.remove("main-form__valid--invisible");
    ok.classList.add("main-form__valid--visible");
    evt.preventDefault();
  }
});

buttonError.addEventListener("click", function() {
  if (error.classList.contains("main-form__invalid--visible")) {
    error.classList.remove("main-form__invalid--visible");
    error.classList.add("main-form__invalid--invisible");
  }
});

buttonOk.addEventListener("click", function() {
  if (ok.classList.contains("main-form__valid--visible")) {
    ok.classList.remove("main-form__valid--visible");
    ok.classList.add("main-form__valid--invisible");
  }
});
