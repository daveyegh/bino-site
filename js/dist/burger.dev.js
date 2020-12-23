"use strict";

var menu = document.querySelector('.header__menu');
var burger = document.querySelector('.header__burger');
var body = document.querySelector('body');
burger.addEventListener('click', function () {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  body.classList.toggle('menu-opened');
});
console.log(body);