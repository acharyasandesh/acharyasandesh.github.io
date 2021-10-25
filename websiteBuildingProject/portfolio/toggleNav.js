const toggleBtn = document.querySelector('.toggleBtn');

const navMenu = document.querySelector('.insertLinks');

toggleBtn.addEventListener('click', ()=>{
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
})






// (".navLinks").append('.insertLink')
// console.log(navLinks);


// let clickTarget = null;
// navLinks.forEach((link)=>{
//     link.addEventListener('click', (e)=>{
//         clickTarget = e.target;
//         console.log(clickTarget);
    
//         navLinks.forEach( (a)=>{
//             if(a == clickTarget) {
//                 a.classList.add('active'); 
//             }
//             else{
//                 a.classList.remove('active');
//             }
//         });
//     })
// })