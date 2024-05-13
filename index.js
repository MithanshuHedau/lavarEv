function navbar(){
    
let menu=document.querySelector("#menu");
let navpart2=document.querySelector("#navpart2");
let cross=document.querySelector("#cross");
let lava=document.querySelector("nav");
let tl=gsap.timeline();
tl.from(navpart2,{
    x:150,
    duration:1,
    stagger:0.2,
})
tl.pause();
gsap.from(lava,{
    y:-100,
    duration:2,
})
menu.addEventListener("click",function(){
    navpart2.style.opacity="1";
    menu.style.display="none";
    cross.style.display="block";
    cross.style.position="absolute";
    cross.style.right="-16%";
    tl.play();
})
cross.addEventListener("click",function(){
    menu.style.display="block";
    cross.style.display="none";
    tl.reverse();
})

}
navbar();

function page1(){
    
let myh1=document.querySelector("#myh1");
let myh2=document.querySelector("#myh2");
let para=document.querySelector("#page1 p");
let btn=document.querySelector("#buttons");
gsap.from(myh1,{
    opacity:0,
    duration:2,
    scale:1.2,
})
gsap.from(myh2,{
    opacity:0,
    duration:2,
    scale:1.2,
})
gsap.from(para,{
    duration:2,
    x:-100,
    opacity:0,
})
gsap.from(btn,{
    opacity:0,
    duration:2,
    scale:1.2,
    x:100,
})
}
page1();





