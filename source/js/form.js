var navMain = document.querySelector(".nav");
var competitionMain = document.querySelector(".main__competition");
var navToggle = document.querySelector(".nav__toggle");

navMain.classList.remove('nav--nojs');
competitionMain.classList.remove('main__competition--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    competitionMain.classList.remove('main__competition--big');
    competitionMain.classList.add('main__competition--small');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    competitionMain.classList.add('main__competition--big');
    competitionMain.classList.remove('main__competition--small');
  }
});
