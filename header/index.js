const headerNav = document.querySelector(".header-wrapper");

window.onscroll = () => {
 if(window.scrollY > 25){
    headerNav.classList.add("toggle-white-background");
 }else{
     headerNav.classList.remove("toggle-white-background");
 }
};

const mobileMenuButton = document.querySelector(".mobile-column");
const topLine = document.querySelector(".top-line");
const middleLine = document.querySelector(".middle-line");
const bottomLine = document.querySelector(".bottom-line");
const mobileMenu = document.querySelector(".mobile-menu");


mobileMenuButton.addEventListener("click",()=>{
    topLine.classList.toggle("rotate-top");
    middleLine.classList.toggle("hide-middle");
    bottomLine.classList.toggle("rotate-bottom");
    mobileMenu.classList.toggle("reveal-mobile-menu")
})