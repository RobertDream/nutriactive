const header = document.querySelector('header');

const anchor = document.querySelector('.menu-anchor')

function sticky(header, anchor){
    header.classList.toggle("sticky", window.scrollY>0);
    anchor.classList.toggle("sticky", window.scrollY>0);
}
window.addEventListener("scroll", function(){
sticky(header, anchor);
});


 
      