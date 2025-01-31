'use strict';

// select element
const navLink = document.querySelectorAll('.nav-link');

//*.................. Scrolling function ..................
navLink.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    })
});