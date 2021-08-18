console.log('bla bla');

function sum (a,b) {
    // 
    return a+b;

}


let sucet = sum(2,3);

while (sucet < 10,sucet < 10){

    console.log('malo');
    sucet++;
}




if (sucet > 10) {
    console.log('dost vela');
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

for (i = 1 ;i < 50; i++){
    
     //widthFunction();
    krabicka.style.width = parseInt(krabicka.style.width) + i + 'px';
    // console.log(krabicka.style.width);

    
}