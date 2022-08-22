const menu = document.querySelector('#menu-bars');
const header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
var typed = new Typed('.typing-text',{
    strings:['front-end developer','front-end developer', 'back-end developer','full-stack web developer','web designer'],
    loop:true,
    typeSpeed:150
});
VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max : 25
});



function events(){
    var btnFlip = document.querySelectorAll('.btnFlip');
    var content = document.querySelector("#content");
    var contentFront = document.getElementById("flip-card-front");
    var contentBack = document.getElementById("flip-card-back");
    var imgBox = document.getElementById("imgBox");
    
    for (let i=0; i<btnFlip.length ; i++){
        btnFlip[i].onclick = () =>{
            content.classList.toggle('flip');
            contentFront.classList.toggle('flip');
            contentBack.classList.toggle('flip');
            imgBox.classList.toggle('flip');
        }
    }
}



// Projects Loops

var data = null;
function callAjax(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'js/projects.json', false);
    xhr.onload = function(){
        if(this.status >= 200 && this.status < 400){
            data = JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
    xhr.onerror = console.log("Error....");
}

function addProjectElement(data){
    i = 0;
    data.forEach(element => {
        if(i<4){
            projectElement = document.querySelector('.pc1');
        }
        else if(i>=4 && i<8){
            projectElement = document.querySelector('.pc2');
        }
        else{
            /**/projectElement = document.querySelector('.pc3');
        }
        projectElement.innerHTML += `<div class="box"><div id="imgBox" class="imgBox">
        <img src=${element.imgWeb} alt=${element.name}></div>
    <div id="content" class="content"><div id="flip-card-front" class="flip-card-front">
        <a href=${element.webpage} target="_blank" class="btn">${element.name}</a>
        <p>${element.info}</p>
        <a class="btn btnFlip" href=${element.gitLink} target="_blank"><i class="material-icons">code</i></a>
    </div>
    <div id="flip-card-back" class="flip-card-back">
        <img src=${element.imgCode} alt=${element.name}>
        <button class="btn btnFlip"><i class="material-icons">3d_rotation</i></button>
        <div class="backBtns">
            <a href=${element.imgLink} target="_blank" class="btn">IMG</a>
            <a href=${element.gitLink} target="_blank" class="btn">GIT</a>
        </div>
    </div></div>`;
    i++;
    });
}

//load Items
window.addEventListener('DOMContentLoaded', function(){
    callAjax();
    addProjectElement(data);
    // events();
})
