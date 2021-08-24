// let cross = 'xxxxx';

// function writeUntil() {
//     for (let i = 0; i < 5; i++) {
//         console.log(cross);
//         cross = cross.substring(0, 4-i)
//     }
// }

// writeUntil();


// let arr = ['X', 'X', 'X', 'X', 'X'];

// function writeCrosses() {
//     for (let i = arr.length; i > 0; i--) {
//         let x = arr.toString().replaceAll(',', ' ');
//         console.log(x);
//         arr.pop();
//     }

// }

// writeCrosses();


// function writeUntil2(repeat) {
//     const cross = [];
//     for (i = 0; i < repeat; i++) {
//         cross[i] = 'x';
//     }
//     console.log('moje pole: ', cross);

//     for (k = 0; k < repeat; k++) {
//         console.log(cross.join(' '));
//         cross.pop();
//     }

// }

// writeUntil2(6);


// function writeUntil2(repeat, value) {
//     const cross = Array(repeat).fill(value);

//     console.log('moje pole: ', cross);

//     for (k = 0; k < repeat; k++) {
//         console.log(cross.join(' '));
//         cross.pop();
//     }

// }

// writeUntil2(8, '#');

class Hero {
    constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.hp = 100;
    this.defence = 10;
    console.log(`Hero ${this.name} created!`)
}

    takeHit = (hit) => {

        let actualDefence = this.hp + this.defence;   

        if (hit < actualDefence) {
            actualDefence -= hit;     
            if (actualDefence > this.hp) {
                this.defence = actualDefence - this.hp;
            } else {
                this.defence = 0;
                this.hp = actualDefence;
            }
        
        console.log(`Ouch! What a hit! Your hp is now ${this.hp} and defence is ${this.defence}`)

        } else {
            this.defence = 0;
            this.hp = 0;
            console.log(`Game over! You have run out of hp and defence!`);}
    }
}

const superman = new Hero('Klark Kent', 'laser');


