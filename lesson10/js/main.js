let cross = 'xxxxx';
function writeUntil(repeat, value) {

    // const array = []
    // for (k = 0; k < repeat; k++) {
    //     array.push('x')
    // }
    // console.log('moje pole:', cross)

    const array = Array(repeat).fill(value)
    for (let i = 0; i < repeat; i++) {
        // console.log(array.toString().replaceAll(",", ""))
        console.log(array.join(""));
        array.pop();


    }


}
writeUntil(8, '<');

function wrap(fnc) {
    console.log('****', fnc(), '****')

}

function sum(a, b) {
    return a + b
}

wrap(() => sum(2, 3))

function myFunc() {
    return console.log
}

class Hero {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
        this.hp = 100;
        this.defense = 10;
        console.log('hero created')
    }
    takeHit = (hit) => {
        this.defense = this.defense - hit;
        if (this.defense <= 0) {
            let hitCrossDefense = this.defense * (-1);
            this.defense = 0;
            this.hp = this.hp - hitCrossDefense
            if (this.hp <= 0) {
                this.hp = 0;
                console.log('Superman je shitny hero, nevydrzal --->RIP<---')
            }
        }

    }
}

const superman = new Hero('Duri Mokry', 'laser',)
superman.takeHit(10);
console.log(superman)

superman.takeHit(10);

console.log(superman)
