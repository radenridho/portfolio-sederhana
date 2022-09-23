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
    const topTop = document.querySelector('#toTop');

    if(window.pageYOffset > fixed_nav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Klik Dimana saja
window.addEventListener('click', function (e) {
    if(e.target != hamburger && e.target != nav_menu){
        hamburger.classList.remove('hamburger-active');
        nav_menu.classList.add('hidden');
    }
});

// Dark Mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
    darkToggle.addEventListener('click', function(){
        if(darkToggle.checked) {
            html.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            html.classList.remove('dark');
            localStorage.theme = 'light';
        }
    });

//Pindah sesuai posisi
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }

