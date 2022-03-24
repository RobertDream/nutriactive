const headerNav = document.querySelector('header');
const anchor = document.querySelector('.menu-anchor');
function sticky(headerNav, anchor){
    headerNav.classList.toggle("sticky", window.scrollY>0);
    anchor.classList.toggle("sticky", window.scrollY>0);
}
window.addEventListener("scroll", function(){
sticky(headerNav, anchor);
});
   

//mobil
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


//Galerie
var elements = document.getElementsByClassName("column");
var i;
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%"; 
    elements[i].style.flex = "100%";
  }
}
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%"; 
    elements[i].style.flex = "50%";
  }
}
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  
    elements[i].style.flex = "25%";
  }
}
var header = document.getElementById("myGallery");
var btns = header.getElementsByClassName("btn-gl");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
