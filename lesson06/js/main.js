const theBlueBox = document.querySelector('#blue-box');
const theRedBox = document.querySelector('#red-box');


// for debugging purpose
console.log(theBlueBox);
console.dir(theBlueBox);
console.log(theRedBox);
console.dir(theRedBox);

// initialize the blue box  and launch it
 theBlueBox.style.left = "0px";
theBoxMove = setInterval(moveBox,100,5);

/*
function moveBox - move blue box to left each time with an 'offset' pixels forward 
param offsett
*/
 function moveBox(offset) {
    let leftBox = theBlueBox.style.left;
    leftBox = leftBox.slice(0,leftBox.length-2);
    leftBox = parseInt(leftBox);
    leftBox += offset;
    leftBox = leftBox.toString();
    leftBox  += "px";
    theBlueBox.style.left = leftBox;
 }

 // function stopBox - stop bluebox
 function stopBox() {
    clearInterval(theBoxMove);
 }

 // initialize the redbox
 theRedBox.style.width ="40px";
theRedBox.style.height = "40px";

/*
function increaseBox - increase red box dimensions each time with an offset pixels

param offset
*/
 function increaseBox(offset) {

    let widthBox = theRedBox.style.width;
    let heightBox = theRedBox.style.height;

    widthBox = widthBox.slice(0,widthBox.length-2);
    heightBox = heightBox.slice(0,heightBox.length-2);
    
    widthBox = parseInt(widthBox);
    heightBox = parseInt(heightBox);

    widthBox += offset;
    heightBox += offset;

    widthBox = widthBox.toString();
    heightBox = heightBox.toString();

    widthBox  += "px";
    heightBox  += "px";

    theRedBox.style.width = widthBox;
    theRedBox.style.height = heightBox;
 }



