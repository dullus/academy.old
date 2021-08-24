/*

function showX() {
    let text = "XXXXX";

    for (let i = 0; i < 5; i++ ) {
        console.log(text);
        text = text.substring(1, 4-i );
    };
    
}
showX();

*/



const crossArray = ['x', 'x', 'x', 'x', 'x'];

while(crossArray.length > 0) {
    console.log(crossArray.toString().replaceAll(",",""));
    crossArray.pop();
}

function writeUntil2(repeat, sign) {


    const cross = Array(repeat).fill(sign);

  

    console.log('moje pole: ', cross)

    for (k = 0;  k< repeat;  k++) {
        console.log(cross.join(' '))
        cross.pop();
}


}
writeUntil2(5,'_');

class Hero{
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
        this.hp = 100;
        this.defense = 10;
        console.log("hero created");
    }
    takeHit = (hit) => {
        console.log(`Hero: ${this.name} took a hit (power = ${hit})`)
        if (this.defense < hit)  {
            this.hp -= hit-this.defense;
            this.defense = 0;
        } else{
            this.defense -= hit;
        }
    if (hit > this.hp) {
        console.log(`${this.name} is dead :(((((`)
    }}
        getHp = () => {
            console.log(`Hero: ${this.name} HP = ${this.hp}`);
        }
        getDefense = () => {
            console.log(`Hero: ${this.name} defense = ${this.defense}`);
        }
}
const superman = new Hero("Clark Kent", "laser");
console.log(superman);

superman.takeHit(6);
superman.getHp();
superman.getDefense();

superman.takeHit(6);
superman.getHp();
superman.getDefense();

superman.takeHit(80);
superman.getHp();
superman.getDefense();

superman.takeHit(20);
