function sum(a,b) {
    return a+b;
}
let sucet = sum(2,4);

while(sucet < 10) {
    console.log('malo');
    sucet++;
}

if (sucet > 10) {
    console.log('dost vela')
}
else {
    console.log('malo');
}

const krabicka = document.querySelector('#box')


krabicka.style.width = '500px';
console.log(krabicka)