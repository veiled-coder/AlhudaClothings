"use strict;"


const ShowMenu=document.querySelector(".Mobile-icon");
const MobileMenu=document.getElementById("Mobile-Menu");
const MobileContainer=document.getElementById("MobileNav-divContainer");

ShowMenu.addEventListener('click',()=>{
MobileMenu.style.left='50%';
MobileContainer.style.background='rgba(109, 164, 209, 0.664)';
    
   
})
