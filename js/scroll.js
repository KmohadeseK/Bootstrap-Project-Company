'use strict';

//*.................. Scrolling function ..................

document.querySelector('.navbar-nav')
    .addEventListener('click', function (e) {
        e.preventDefault();

        // Matching strategy
        if (e.target.classList.contains('nav-link')) {
            const id = e.target.getAttribute('href');
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
        }
    });