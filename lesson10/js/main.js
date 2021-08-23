// let cross = ['X', 'X', 'X', 'X', 'X']
// let cross = [];

// function fillArray(value,count){
//     for (var i = 0; i < count; i++){
//         cross.push(value);
//     }
//     return cross;   
// }

// function writeUntil(){
//     for(let i = 0; i < 5; i++){
//         let k = cross.toString().replaceAll(',' , '');
//         console.log(k);
//         cross.pop();
//     } 
// } 


// writeUntil();

// function writeUntil2(repeat, value){
//     const cross = Array(repeat).fill(value)
    
//     for(k = 0; k < repeat; k++){
//         console.log(cross.join(''));
//         cross.pop();
//     }
// }

// writeUntil2(5,'-');

class Hero {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
        this.hp = 100;
        this.defence = 10;
        console.log('hero created')
    }
    takeHit = (hit) => {
        if()
    } 
}


const superman = new Hero('Clark Kent', 'laser');
console.log(superman)