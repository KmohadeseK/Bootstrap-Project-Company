'use strict';

// select elements
const section1 = document.querySelector('#home');
const homeLink = document.querySelector('.home-link');
const section2 = document.querySelector('#about');
const aboutLink = document.querySelector('.about-link');
const section3 = document.querySelector('#comments');
const commentsLink = document.querySelector('.comments-link');
const section4 = document.querySelector('#contact');
const contactLink = document.querySelector('.contact-link');

// scrolling contact link
contactLink.addEventListener('click', function (e) {
    section4.scrollIntoView({ behavior: 'smooth' });
});

// scrolling comments link
commentsLink.addEventListener('click', function (e) {
    section3.scrollIntoView({ behavior: 'smooth' });
})

// scrolling about link
aboutLink.addEventListener('click', function (e) {
    section2.scrollIntoView({ behavior: 'smooth' });
})

// scrolling home link
homeLink.addEventListener('click', function (e) {
    section1.scrollIntoView({ behavior: 'smooth' });
})