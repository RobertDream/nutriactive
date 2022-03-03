const headerNav = document.querySelector('header');
const anchor = document.querySelector('.menu-anchor');
function sticky(headerNav, anchor){
    headerNav.classList.toggle("sticky", window.scrollY>0);
    anchor.classList.toggle("sticky", window.scrollY>0);
}
window.addEventListener("scroll", function(){
sticky(headerNav, anchor);
});
   


function openMenu(p){
    p.style = "display: flex";
}
function closeMenu(p){
    p.style = "display: none";
}

const btnMenu = document.getElementById('menu-mobile-btn-container');
const menu = document.querySelector('.menu-mobile-container');
const closeBtn = document.getElementById('close-menu');

btnMenu.addEventListener("click", function(){
    openMenu(menu);
});
closeBtn.addEventListener("click", function(){
    closeMenu(menu);
})