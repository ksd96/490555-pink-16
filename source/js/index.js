var navMain = document.querySelector(".nav");
var downloadMain = document.querySelector(".download");
var navToggle = document.querySelector(".nav__toggle");

navMain.classList.remove('nav--nojs');
downloadMain.classList.remove('download--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    downloadMain.classList.remove('download--big');
    downloadMain.classList.add('download--small');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    downloadMain.classList.add('download--big');
    downloadMain.classList.remove('download--small');
  }
});
