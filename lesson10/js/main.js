let cross = 'xxxxx';

function writeUntil() {
    for (let i = 0; i < 5; i++) {
        console.log(cross);
        cross = cross.substring(0, 4 - i)

    }
}
//  writeUntil();

function writeUntil2(repeat, value) {
    const cross = Array(repeat).fill(value)

    for (k = 0; k < repeat; k++) {
        console.log(cross.join(''));
        cross.pop();
    }
}
writeUntil2(5, '-');





function wrap(fnc) {
    console.log('****', fnc(), '****')
}
function sum(a, b) {
    return a + b
}

wrap(() => sum(2, 4))

class Hero {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
        this.hp = 100;
        this.defense = 10;
        console.log('hero created')
    }
    takeHit = (hit) => {
        if (this.defense - hit >= 0) {
            this.defense -= hit;
        }
        else {
            this.hp += (this.defense - hit);
        }
    }
}

const superman = new Hero('Klark Kent', 'laser');
console.log(superman);



