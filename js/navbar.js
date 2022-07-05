const activepage = window.location.pathname;
const navlinks = document.querySelectorAll('nav ul li a').forEach(link => {
    if(link.href.includes(`${activepage}`)){
        link.classList.add('active');
    }
});

const nabVis = document.querySelector('.nav-link-vis');
const burger = document.querySelector('.burger');

const navMobile = document.querySelector('.nav-container');


burger.addEventListener('click', () => {
    nabVis.classList.toggle('nav-link-vis');
    navMobile.classList.toggle('nav-container');
});