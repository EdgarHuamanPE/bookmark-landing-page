
const header_menu=document.querySelector('.header__menu');
const header__imgbar=document.querySelector('.header__imgbar');
const header__close=document.querySelector('.header__close');

header__imgbar.addEventListener('click',(e)=>{
    header_menu.classList.toggle("show-menu");
});

header__close.addEventListener('click',(e)=>{
    header_menu.classList.toggle("show-menu");
});

