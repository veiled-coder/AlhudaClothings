"use strict;"


const ShowMenu=document.querySelector(".Mobile-icon");
const MobileMenu=document.querySelector(".Mobile-menu");
const Overlay=document.querySelector('.overlay');

ShowMenu.addEventListener('click',()=>{
    MobileMenu.classList.remove('d-none');
    MobileMenu.classList.add('M')

    Overlay.classList.remove('d-none')

})

Overlay.addEventListener('click',()=>{
    MobileMenu.classList.add('d-none');
    Overlay.classList.add('d-none','d-md-none')

})