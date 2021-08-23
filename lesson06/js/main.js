function sum(a,b) {
    return a + b;
}

let sucet = sum(2,4);

while (sucet < 10) {
    console.log('malo')
    sucet = sucet + 1
}



if (sucet > 10) {
    console.log('dost vela')
} else {
    console.log('malo');
} 

const krabicka = document.querySelector('#box');
console.log(krabicka);
// krabicka.style.width = '500px';
// krabicka.style.left = '500px'


console.log(sucet);


function widthFunction() {
    krabicka.style.width = krabicka.style.width + 1 + 'px';

}

widthFunction();

for (i = 1 ;i < 800; i++){
    
    
    (function(i){

        window.setTimeout(function(){
            krabicka.style.width = i + 'px';
        }, i * 10);
    
      }(i));
    
    }

    
