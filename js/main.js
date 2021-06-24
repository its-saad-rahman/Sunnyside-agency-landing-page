
// Menu Button

const menuBtn= document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(e){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open')
        menuNav.classList.add('open')
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');

        showMenu = false;
    }

    e.preventDefault();
}

// Hiding Header
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.header');    
   if (window.scrollY > 50) {
       navbar.style.display = 'none';
       navbar.style.transition = "all 5s ease";
    } else {
        navbar.style.display = 'block';
        navbar.style.transition = "all 5s ease";
   }

    
 
 });

 //Scroll Down Button

 



 function scrollToDiv(){
    document.getElementById("about").scrollIntoView({ 
      behavior: 'smooth' 
   });
}