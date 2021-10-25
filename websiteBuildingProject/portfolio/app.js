projectElement = document.querySelector('.projectElements');

var data = null;
function callAjax(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'projects.json', false);
    xhr.onload = function(){
        data = JSON.parse(xhr.responseText);
    }
    xhr.send();
}

function addProjectElement(data){
    data.forEach(element => {
        projectElement.innerHTML += `<div class="cards"><div class="imageBox">
        <img src="${element.img}" alt="${element.name}"/>
    </div>
    <button class="projectButton"><a href="${element.link}" target="_blank">${element.name}</a></button></div>`;
    });
}

//load Items
window.addEventListener('DOMContentLoaded', function(){
    callAjax();
    addProjectElement(data);
})

