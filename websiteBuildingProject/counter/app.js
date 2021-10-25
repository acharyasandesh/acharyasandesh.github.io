// our starting count value
let count = 0;

const value = document.querySelector("#value");
let btns = document.querySelectorAll('.btn');
console.log(btns);
btns.forEach(function(btn){
    btn.addEventListener('click', e=>{
        const btnClass = e.currentTarget.classList;
        // console.log(btnClass);
        if(btnClass.contains("decrease")){
            count--;
        }
        else if(btnClass.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if(count >0){
            value.style.color = "green";
        }
        else if(count === 0){
            value.style.color = "black";
        }
        else if(count <0){
            value.style.color = "red"
        }

        value.textContent = count;
    })
})