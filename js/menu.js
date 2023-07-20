const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileClose = document.querySelector('.mobile-close');

const mobileHeader = document.querySelector('#mobile-header');

hamburgerMenu.addEventListener('click', ()=> {
    mobileHeader.style.display = 'block';
});
mobileClose.addEventListener('click', () => {
    mobileHeader.style.display = 'none';
});
