function ajaxCall(){var xhr = new XMLHttpRequest();

xhr.open('GET', 'person.json');

xhr.onload = function(){
    ourData = JSON.parse(xhr.responseText);
    return ourData;
}
xhr.send();}

// Why is this not working? let btns = document.querySelector('.btn-container').children;
// console.log(btns);

// btns.forEach();
var ourData= null;
let btns = document.querySelectorAll('.btn');
let dataCount = 0;

const imgs= document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


function changeData(){
    ajaxCall();
    btns.forEach(btn=>{
        btn.addEventListener('click', e=>{
            let clickedbtn = e.currentTarget.classList;

            if(dataCount >= ourData.length) {
                dataCount = 0;
            }
            else if(dataCount < 0){
                dataCount = ourData.length-1;
            }
            if(dataCount<ourData.length && dataCount>  -1){
                if(clickedbtn.contains('next-btn')){
                    document.querySelector('#author').textContent = ourData[dataCount].name;
                    imgs.src = ourData[dataCount].img;
                    dataCount++;
                }
                else{
                        document.querySelector('#author').textContent = ourData[dataCount].name;
                        dataCount--;
                }
            }
        }
    )})
}

changeData();