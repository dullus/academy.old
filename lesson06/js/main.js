
// function sum(a,b){
//     return a+b;
// }

// let sucet = sum(2,6);

// while(sucet < 10){
//     console.log('malo')
//     sucet++ 
// }

// if (sucet>10){
//     console.log('dost vela')
// }else{
//     console.log('malo fess');
// }

// const box = document.querySelector('#box');
// box.style.left='10px'
// console.dir(box);
// let i = 1;

// for(i;i<=10;i++){
    
//     setTimeout(function() {
//         box.style.left=(i*10)+'px';
//         console.log(i)
//     }, 1000);
// }
var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    box.style.left=(i*10)+'px';   //  your code here
    i++;                    //  increment the counter
    if (i < 10) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 500)
}

myLoop();  

