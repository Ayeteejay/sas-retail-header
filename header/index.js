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

const mobileMenuLoginButton = document.querySelector(".mobile-menu-login-default");
const mobileMenuLoginRows = document.querySelector(".mobile-menu-login-options");
const chevronIcon = document.querySelector(".chevron");

mobileMenuLoginButton.addEventListener("click",()=>{
mobileMenuLoginRows.classList.toggle("reveal-mobile-menu-login");
chevronIcon.classList.toggle("rotate")
})

window.addEventListener('resize',()=>{
    console.log(window.innerWidth);
    if(window.innerWidth > 991){
        if(mobileMenu.classList.contains("reveal-mobile-menu")){
            mobileMenu.classList.toggle("reveal-mobile-menu");
            topLine.classList.toggle("rotate-top");
            middleLine.classList.toggle("hide-middle");
            bottomLine.classList.toggle("rotate-bottom");
        }
    }
})