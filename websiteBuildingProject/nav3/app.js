const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

})

const navLinks = document.querySelectorAll(".menu a");
console.log(navLinks);

let clickTarget = null;


navLinks.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        clickTarget = e.target;
        console.log(clickTarget);
    
        navLinks.forEach( (a)=>{
            if(a == clickTarget) {
                a.classList.add('active'); 
            }
            else{
                a.classList.remove('active');
            }
        });
    })
})