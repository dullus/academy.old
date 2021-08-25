console.log('Hello world');

for (i =5; i >= 1; i--) {
    console.log(i);
}

let cross = 'xxxxx';

function writeUntil() {
    for (let i = 0; i < 5; i++){
        
        console.log(cross)
        cross = cross.substring(0, 4-i)
    }
    
}

//writeUntil();

let arr = [];

arr = ['x','x','x','x','x'];
    function myArr() {
    while (arr.length > 0) {
        console.log(arr.toString().replaceAll(",",""));
        arr.pop();
    }
}

myArr();


function myArr2(repeat, value) {
    // const cross = [];
    // for(i =0; i< repeat; i++){
    //     cross.push('x');
    // }
    
    const cross = Array(repeat).fill(value)

    for (k = 0; k < repeat; k++){
        console.log(cross.join(''));
        cross.pop();

    }
}
myArr2(8, '+');

class Hero {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
        this.hp = 100;
        this.defense = 10;
        console.log('Hero created')

    }
    takeHit = (hit)=> {
        if( hit >= this.hp + this.defense) {
            console.log('Git Gud');
        } 
        if( this.defense < hit) {
            this.hp -= hit - this.defense;
            this.defense = 0;
            console.log('you got hit for: '+ hit + ' your armor is 0 and your HP is: ' + this.hp);
        } else {
            this.defense -= hit;
            console.log('you got hit for: '+ hit + ' your armor is: ' + this.defense +' and your HP is: ' + this.hp);
        }
        if(this.defense === 0 && this.hp > hit) {
            this.hp -= hit;
            console.log('you got hit for: '+ hit + ' your armor is 0 and your HP is: ' + this.hp);
        } else {
            console.log('you died');
        }
    }
}

const superman = new Hero('Klark kent', 'laser');
console.log(superman)


