const redBox = document.getElementById('redBox');

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

const blueBox = document.getElementById('blueBox');
console.log(blueBox);
blueBox.style.width = "40px";
blueBox.style.height = "40px";
blueBox.style.left = "40px";
console.log(blueBox.style.left);

function moveToLeft() {

}
setInterval(moveToLeft(), 500);