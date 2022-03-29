"use strict;"


let ShowMenu=document.querySelector(".Mobile-icon"),
MobileMenu=document.querySelector(".Mobile-menu"),
MobileContainer=document.getElementById("MobileNav-divContainer"),
MobileContainer2=Array.from(document.querySelectorAll(".MobileNav-Container"))


// harmburger icon animation

ShowMenu.addEventListener('click',()=>{

// MobileContainer.style.background='rgba(109, 164, 209, 0.26)';

    
   
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
animationID=requestAnimationFrame(animationFn);

    }
}

function touchEnd(){
    console.log('touch ended');
    isDragging=false;
    // cancelAnimationFrame(animationID);
    const movedby =currentTranslate-prevTranslate;
console.log(movedby);
if (movedby <100){
    currentTranslate=50;
    bgChange();
    }
else{
currentTranslate=100;
MobileContainer.style.background="none";
}
   
}


function touchMove(event){
    console.log('moving your fingers');
    const currentPosition=getPositionX(event);
    currentTranslate=prevTranslate+currentPosition-startPosition;
}

function getPositionX(event){
 return event.touches[0].clientX;

}

function animationFn(){
setMenuPosition()

if (isDragging) requestAnimationFrame(animationFn)
}

function bgChange(){
return MobileContainer.style.background="rgba(109,164,209,0.26)";
}

function setMenuPosition(){
   
    MobileMenu.style.left=`${currentTranslate}%`;


}
// function setPositionByIndex(){
//     currentTranslate =currentIndex * -window.innerWidth
//     prevTranslate=currentTranslate
//     setSliderPosition();
// }

