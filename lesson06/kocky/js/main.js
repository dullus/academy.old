const redBox = document.querySelector('#redBox');

redBox.style.width = "40px";
redBox.style.height = "40px";

function increaseSize(offset) {
   let widthBox = parseInt(redBox.style.width);
   let heightBox = parseInt(redBox.style.height);

   if (widthBox >= 1400) {
      return;
   }
   widthBox += offset;
   heightBox += offset;

   redBox.style.width = widthBox + "px";
   redBox.style.height = heightBox + "px";

}

const blueBox = document.querySelector('#blueBox');

console.dir(blueBox);

blueBox.style.top = "0px";
blueBox.style.left = "0px";


function moveToLeft(offset) {
   let  leftBox = parseInt(blueBox.style.left);

   if(leftBox >= 1800) {
      return;
   }
   leftBox += offset;

   blueBox.style.left = leftBox + "px";
}

let animateHandler;

function animateBox(offset) {
   animateHandler = setInterval(moveToLeft, 50,offset);
}

function stopAnimatedBox() {
   clearInterval(animateHandler);
}
