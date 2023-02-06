import './sass/main.scss'


// Selectors
const menuBtn = document.querySelector('.nav__menu-btn');
const menuList = document.querySelector('.nav__list');
const menuIcon = document.querySelector('.nav__icon');

const cookieAlert = document.querySelector('.cookie-alert');
const acceptCookieBtn = document.querySelector('.accept-cookies-btn');

const showMenu = function() {
    menuBtn.addEventListener('click', function() {
        menuList.classList.toggle('nav__show-list');
        menuIcon.classList.toggle('rotate');
    });
};

const cookieConsent = function() {
    const isConsented = localStorage.getItem("cookieConsent");
    if (!isConsented) {
        cookieAlert.classList.add('cookie-alert--show');
    }

    acceptCookieBtn.addEventListener('click', function() {
        localStorage.setItem("cookieConsent", true);
        cookieAlert.classList.remove('cookie-alert--show');
    });
}

// Initialize all functions
const init = function() {
    showMenu();
    cookieConsent();
};

init();
