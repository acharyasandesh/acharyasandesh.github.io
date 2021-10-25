var ourObject = document.querySelector(".object");
var container = document.querySelector(".objectContainer");

container.addEventListener('mousemove', getClickPosition, false);

function getClickPosition(e){

    var xPos = e.pageX;
    var yPos = e.pageY;
    // var translate3dValue = `translate3d(${xPos}px, ${yPos}px, 0)`;
    // console.log(translate3dValue);
    // ourObject.style.transform = translate3dValue;
    ourObject.style.left = xPos +"px";
    ourObject.style.top= yPos +"px";
}