const btn =document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', function(){
    if(video.paused){
        video.play();
    }
    else if(video.played){
        video.pause();
    }
    else{
        video.currentTime = 0;
    }
});

const preLoader = document.querySelector('.pre-loader');

window.addEventListener('load',()=>{
    console.log('here');
    preLoader.classList.add('hidePreLoader');
})