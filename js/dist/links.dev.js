"use strict";

var links = document.querySelectorAll('.works__list.works__list-label');
var link = document.querySelectorAll('.works__list-label');
links.forEach(addEventListener('click', function () {
  links.classList.toggle('link-active');
}));