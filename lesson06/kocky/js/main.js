const theBlueBox = document.querySelector("#blueBox");
const theRedBox = document.querySelector("#redBox");
const theGreenBox = document.querySelector("#greenBox");

/*
function moveBox - move blue box to left each time with an 'offset' pixels forward 
param offsett
*/
 function moveBlueBox(offset) {
    let leftBox = theBlueBox.style.left;
    leftBox = leftBox.slice(0,leftBox.length-2);
    leftBox = parseInt(leftBox);
    leftBox += offset;
    leftBox = leftBox.toString();
    leftBox  += "px";
    theBlueBox.style.left = leftBox;
    console.log(theBlueBox.style.left);
 }

 /*
function moveBox - move blue box to left each time with an 'offset' pixels forward 
param offsett
*/
function moveGreenBox(offset) {
   let leftBox = theGreenBox.style.left;
   leftBox = leftBox.slice(0,leftBox.length-2);
   leftBox = parseInt(leftBox);
   leftBox += offset;
   leftBox = leftBox.toString();
   leftBox  += "px";
   theGreenBox.style.left = leftBox;
}

/*
function animateGreenBox() {
   setInterval(moveGreenBox, 100, 5);
}
*/
 
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



