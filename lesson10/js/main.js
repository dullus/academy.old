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
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.hp = 100;
    this.defence = 10;
    console.log("hero created");
  }
  takeHit = (hit) => {
    const damage = hit - this.defence;
    if (this.defence > 0) {
      this.defence = this.defence - hit;
      if (this.defence < 0) {
        this.defence = 0;
      } else {
        console.log("u lose defence");
      }
    }
    if (this.hp > 0) {
      this.hp = this.hp - damage;
    }
    if (this.hp <= 0) {
      console.log(`${this.name}` + " is dead");
      this.hp = 0;
    }
  };
}

const superman = new Hero("Clark Kent", "laser");
superman.takeHit(30);
superman.takeHit(80);

console.log(superman);
