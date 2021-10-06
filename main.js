let adjust = document.getElementById('nav__adjust-btn');
let menu = document.getElementById('hamburger');
let navbar = document.querySelector('.header__nav')
let navList = document.querySelector('.nav__list')

adjust.addEventListener("click", function () {
  document.body.classList.toggle('dark-mode');
})

menu.addEventListener("click", function () {
  navbar.classList.toggle('nav-show');
})
