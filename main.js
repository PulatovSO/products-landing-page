let adjust = document.getElementById('nav__adjust-btn');
let menu = document.getElementById('hamburger');
let navbar = document.querySelector('.header__nav')
let navList = document.querySelector('.nav__list')
let quizBtnOne = document.querySelector('.quiz-one');
let faqContent = document.querySelector('.faq__content');

adjust.addEventListener("click", function () {
  document.body.classList.toggle('dark-mode');
})

menu.addEventListener("click", function () {
  navbar.classList.toggle('nav-show');
})

// quizBtnOne.addEventListener('click', function () {
//   faqContent.classList.toggle('display');
// })



function faqBtnOne() {
  faqContent.classList.toggle('display');
}
function faqBtnTwo() {
  document.querySelector('.faq__content-two').classList.toggle('display');
}
function faqBtnThree() {
  document.querySelector('.faq__content-three').classList.toggle('display');
}
function faqBtnFour() {
  document.querySelector('.faq__content-four').classList.toggle('display');
}
