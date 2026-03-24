const osLink = document.querySelector('nav.main-nav li:nth-child(1) > a');
const darkLink = document.querySelector('nav.main-nav li:nth-child(2) > a');
const lightLink = document.querySelector('nav.main-nav li:nth-child(3) > a');

darkLink.addEventListener("click", function(event) {
    event.preventDefault();

    const body = document.querySelector('body');
    body.classList.add('dark');
    body.classList.remove('light');
});

lightLink.addEventListener("click", function(event) {
    event.preventDefault();

    const body = document.querySelector('body');
    body.classList.add('light');
    body.classList.remove('dark');
});

osLink.addEventListener("click", function(event) {
    event.preventDefault();

    const body = document.querySelector('body');
    body.classList.remove('light');
    body.classList.remove('dark');
});