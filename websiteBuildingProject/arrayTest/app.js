//Navbar start
const menu = document.querySelector('.menu-lines');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.imgChange');

menu.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    menu.classList.toggle('active');
    logo.classList.toggle('change');
    if(menu.classList.contains('active')){
        logo.innerHTML=`<img src="img/logoWhite.png" alt="logo">`;
    }
    else{
        logo.innerHTML=`<img src="img/logo.png" alt="logo">`;
    }
});

//Navbar end