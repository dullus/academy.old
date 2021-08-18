// let krabicka = document.querySelector('#box');
// krabicka.style.width = '50px';
// console.log(krabicka);

// var width
// var width = screen.width;
// var height = screen.height;

// console.log(width, height)
// let boxMovement = setTimeout(enlargen(),100)

function enlargen(){
    var box = document.getElementById("box1");
    var currentWidthRed = box.clientWidth;
    var currentHeightRed = box.clientHeight;
    if(currentWidthRed == screen.width){
        alert("Max width reached.");
    } else if(currentHeightRed == screen.height){
        alert("Max height reached")
    } else {
        box.style.width = (currentWidthRed + 1) + "px";
        box.style.height = (currentHeightRed + 1) + "px";
    } 
}

var boxOffset = 0;
function move() {
    boxOffset += 5
    document.getElementById("box2").style.left = boxOffset + "px";
  }


setInterval(move, 10)
setInterval(enlargen, 10)

// while(boxOffset <= 500){
//     move();
// }


// function sum(a,b) {
//     return a + b
// }

// let sucet = sum (2,4);

// while (sucet < 10) {
//     console.log('malo')
//     sucet = sucet + 1
// }
// if (sucet > 10){
//     console.log('dost vela')
// } else {
//     console.log('malo')
// }

