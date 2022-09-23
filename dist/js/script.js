// Hamburger
const hamsbuger = document.querySelector('#hamburger');
const nav_menu = document.querySelector('#nav-menu');
hamsbuger.addEventListener('click', function(){
    hamsbuger.classList.toggle('hamburger-active');
    nav_menu.classList.toggle('hidden');
});

// Navbar Fixed 
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixed_nav = header.offsetTop;

    if(window.pageYOffset > fixed_nav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed')
    }
}