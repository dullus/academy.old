// const box = document.querySelector("#box");
// box.style.width = "500px";
// box.style.background = " green;";
// console.log(box);

// function makeCirlce() {
//   box.style.borderRadius = "50px";
// }
// console.log(parseInt(box.style.width));

// function  increaseSize() {
//   let withBox = parseInt(box.style.width);
//   let heighBox = parseInt(box.style.height);
//   let counter = 0;
//   while (withBox < 1400) {
//     setTimeout(() => {
//       box.style.width = String(withBox) + "px";
//       console.log("nic");
//     }, 100);
//     withBox = withBox + 10;

//     counter += 10;
//   }
//   console.log(String(withBox) + "px");
// }
// increaseSize();

// const box = document.getElementById("box");
// let widthBox = parseInt(box.style.width);

// function increaseSize() {
//   widthBox += 10;
//   if (widthBox < 1000) {
//     setTimeout(increaseSize, 100);
//   }
//   console.log(widthBox);
//   box.style.width = String(widthBox) + "px";
// }

// increaseSize();

// var myFunc01 = function () {
//   var i = 0;
//   while (i < 100) {
//     (function (i) {
//       setTimeout(function () {
//         document.getElementById("d01").innerHTML += 100 - i + "<br>";
//       }, 1000 * i);
//     })(i++);
//   }
// };

// myFunc01();
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function increaseSize() {
  let withBox = parseInt(box.style.width);
  let heighBox = parseInt(box.style.height);
  while (withBox < 1000 && heighBox < 500) {
    await sleep(400);
    withBox = withBox + 10;
    heighBox = heighBox + 10;
    box.style.width = String(withBox) + "px";
    box.style.height = String(heighBox) + "px";
  }
}
increaseSize();
