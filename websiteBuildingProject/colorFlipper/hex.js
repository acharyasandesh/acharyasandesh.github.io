let hex = "0123456789abcdef";
let hexArray = Array.from(hex.split(''));
console.log(hexArray);


const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=>{
    let hexColor = '#';

    for(let i =0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hexArray.length);
}