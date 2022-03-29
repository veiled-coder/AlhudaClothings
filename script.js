"use strict;"


let ShowMenu=document.querySelector(".Mobile-icon"),
MobileMenu=document.querySelector(".Mobile-menu"),
MobileContainer=document.getElementById("MobileNav-divContainer"),
MobileContainer2=Array.from(document.querySelectorAll(".MobileNav-Container"))


// harmburger icon animation

ShowMenu.addEventListener('click',()=>{
MobileMenu.style.left='50%';
MobileContainer.style.background='rgba(109, 164, 209, 0.26)';

    
   
})

// TOUCH SCREEN ANIMANTION
let isDragging=false,
startPosition=0,
currentTranslate=0,
prevTranslate=0,
animationID=0,
currentIndex=0;


MobileContainer2.forEach(

(menu,index)=>{
menu.addEventListener('touchstart',touchStart(index))
menu.addEventListener('touchend',touchEnd)
menu.addEventListener('touchmove',touchMove)


}

)

function touchStart(index){
return function(event){
currentIndex=index;
isDragging=true;
console.log('i was touched by a finger');
startPosition=getPositionX(event);
console.log(startPosition);
animationID=requestAnimationFrame(animationFn);

    }
}

function touchEnd(){
    console.log('touch ended');
    isDragging=false;
    cancelAnimationFrame(animationID);
    console.log(animationID);

}


function touchMove(event){
    console.log('moving your fingers');
    
    
    const currentPosition=getPositionX(event);
    console.log(currentPosition);
    currentTranslate=prevTranslate+currentPosition-startPosition;
    console.log(currentTranslate);
    bgChange();
    // leftPosition();
}
function getPositionX(event){
 return event.touches[0].clientX;

}
// when the
function animationFn(){


MobileMenu.style.transform=`translateX(${currentTranslate}px)`;

if (isDragging) requestAnimationFrame(animationFn)
}
function bgChange(){
return  currentTranslate<0?MobileContainer.style.background="rgba(109, 164, 209, 0.26)":MobileContainer.style.background="transparent";
}

// function leftPosition(){

// return currentTranslate<0?MobileMenu.style.left="50%":MobileMenu.style.left="100%"
// }
