let box = document.getElementById("box1");

function enlarge(){
    // if(currentWidthRed == screen.width){
    //     // alert("Max width reached.");
    // } else if(currentHeightRed == screen.height){
    //     alert("Max height reached")
    // } else {
        let currentWidthRed = box.clientWidth;
        let currentHeightRed = box.clientHeight;
        box.style.width = (currentWidthRed + 1) + "px";
        box.style.height = (currentHeightRed + 1) + "px";
        
        return;
    } 
// }

function shrink(){
    let currentWidthRed = box.clientWidth;
    let currentHeightRed = box.clientHeight;
    box.style.width = (currentWidthRed - 1) - "px";
    box.style.height = (currentHeightRed - 1) - "px";
}


// var boxOffset = 0;
// function move() {
//     boxOffset += 5
//     document.getElementById("box2").style.left = boxOffset + "px";
    // if(currentWidthBlue == screen.width){
    //     document.getElementById("box2").style.left = boxOffset + "px";
    // }
//   }


// setInterval(move, 10)
setInterval(enlarge, 10);
clearInterval(enlarge);

let btn = document.getElementById("button")

btn.addEventListener("click", shrink)
setInterval(shrink, 10)

