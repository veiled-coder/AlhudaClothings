"use strict;"


let menuIcon=document.querySelector(".Mobile-icon"),
mobileMenu=document.querySelector(".Mobile-menu--ul"),
container=document.querySelector(".MobileNav-Container"),
overlay=document.querySelector(".overlay");




let initialX = 0;
let moveX = 0;
let MOVE_THRESHOLD=100;


menuIcon.addEventListener("click",e=>{
  mobileMenu.style.left= "50%";
  overlay.style.display="block";
 overlay.style.background="rgba(109, 164, 209, 0.26)";

})




function touchStart(e){
    initialX = e.touches[0].pageX;
    console.log(initialX);

}
function touchMove(e){
    let currentX = e.touches[0].pageX;
    moveX = currentX - initialX;
    console.log(currentX);
    console.log(moveX);
}
function touchEnd(e){
    if (moveX < MOVE_THRESHOLD * Math.sign(moveX)) {
      mobileMenu.style.left= "50%";
      overlay.style.display="block";
      overlay.style.background="rgba(109, 164, 209, 0.26)";

  
      } 
    if (moveX > MOVE_THRESHOLD * Math.sign(moveX)) {
        mobileMenu.style.left = "100%";
        overlay.style.display="none";
        
      }
    
      moveX = 0;
}
container.addEventListener('touchstart',touchStart);
container.addEventListener('touchmove',touchMove);
container.addEventListener('touchend',touchEnd);



