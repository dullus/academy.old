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

const supermanAlive = document.getElementById("superman");
const darkseidAlive = document.getElementById("darkseid");

class Hero {
    constructor(name, weapon, appearance) {
        this.name = name;
        this.weapon = weapon;
        this.hp = 100;
        this.defense = 10;
        this.image = appearance;
    }

    takeHit = (hit) => {
        if (this.defense - hit >= 0) {
            this.defense -= hit;
        }
        else {
            this.hp += (this.defense - hit);
            this.defense = 0;
        }
        if (this.hp < 1) {
            this.image.style.visibility = 'hidden';
            window.confirm(`${this.name} is dead. Wanna play again?`);
            this.hp = 0;
            location.reload();
        }
    }

    getHP = () => {
        return this.hp;
    }
}

const superman = new Hero('Klark Kent', 'ice breath', supermanAlive);
const superman_hp = document.getElementById("superman_hp");
const darkseid = new Hero('Darkseid', 'gamma beam', darkseidAlive);
const darkseid_hp = document.getElementById("darkseid_hp");
let supermanValue = document.getElementById("supermanHpValue");
let darkseidValue = document.getElementById("darkseidHpValue");
let supermanHeight = supermanAlive.offsetHeight;
let hoverCount = 0;
let direction = true;

function supermanHovering() {
    if (hoverCount <= 10 && direction) {
        supermanHeight += 1;
        supermanAlive.style.top = `${supermanHeight}px`
        hoverCount++;
        if (hoverCount == 10) {
            direction = false;
        }
    }
    else if (hoverCount >= 0 && !direction) {
        supermanHeight -= 1;
        supermanAlive.style.top = `${supermanHeight}px`
        hoverCount--;
        if (hoverCount == 0) {
            direction = true;
        }
    }
    requestAnimationFrame(supermanHovering)
}

supermanHovering();

const ice = document.getElementById("iceattack");
const laser = document.getElementById("laserbeam");

function getPosition(el) {
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = el.getBoundingClientRect();
    return {
        top: elemRect.top - bodyRect.top,
        left: elemRect.left - bodyRect.left
    };
};

function attackOpponent(opponentHero, weapon) {
    let attackPower = Math.floor(Math.random() * 31);
    let weaponPosition = getPosition(weapon).left;
    weapon.style.visibility = 'visible';
    if (weapon == ice && opponentHero == darkseid) {
        if (weaponPosition <= 950) {
            weaponPosition += 72;
            weapon.style.left = `${weaponPosition}px`;
            requestAnimationFrame(() => attackOpponent(opponentHero, weapon));
        }
        else {
            weapon.style.visibility = 'hidden';
            weapon.style.left = "150px";
            opponentHero.takeHit(attackPower);
            updateHP(darkseid_hp, attackPower);
        }
    }
    else if (weapon == laser && opponentHero == superman) {
        if (weaponPosition >= 150) {
            weaponPosition += 12;
            weapon.style.left = `${weaponPosition}px`;
            requestAnimationFrame(() => attackOpponent(opponentHero, weapon));
        }
        else {
            weapon.style.visibility = 'hidden';
            weapon.style.left = "950px";
            opponentHero.takeHit(attackPower);
            updateHP(superman_hp, attackPower);
        }
    }
}

const iceStrikeButton = document.getElementById('strikeIce');
const laserStrikeButton = document.getElementById('strikeLaser')
iceStrikeButton.addEventListener("click", () => attackOpponent(darkseid, ice));
laserStrikeButton.addEventListener("click", () => attackOpponent(superman, laser));

const autoFight = document.getElementById("autoAttack");
autoFight.addEventListener("click", () => autoAttacking());
function autoAttacking() {
    if (Math.floor(Math.random() * 1) == 2) {
        attackOpponent(darkseid, ice);
        attackOpponent(superman, laser);
    }
    else {
        attackOpponent(superman, laser);
        attackOpponent(darkseid, ice);
    }

}

function updateHP(hpBar, damage) {
    let damageDealt = hpBar.offsetWidth - damage * 5;
    hpBar.style.width = `${damageDealt}px`;
    supermanValue.innerHTML = `100 / ${superman.getHP()}`;
    darkseidValue.innerHTML = `100 / ${darkseid.getHP()}`;
}