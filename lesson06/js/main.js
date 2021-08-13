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

const krabicka = document.querySelector('.box');
console.log(krabicka);
console.dir(krabicka);
krabicka.style.fontSize = '500px';
