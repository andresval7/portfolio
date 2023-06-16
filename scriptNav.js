const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
const navbarIconsElement = document.getElementById('navbar-icons');

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('main-menu--show');
    navbarIconsElement.classList.toggle('navbar-icons--show');
});

const menuLinks = document.querySelectorAll('.navbar-items a[href^="#"]');
menuLinks.forEach(menuLink =>{
    
    menuLink.addEventListener("click", function(){
        
        mainMenuElement.classList.remove('main-menu--show');
        navbarIconsElement.classList.remove('navbar-icons--show');
    })
});