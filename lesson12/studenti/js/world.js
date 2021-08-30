import { Hero } from "./hero.js";
import { Enemy } from "./enemy.js";

const MAX_ENEMIES = 10;
const COLLISION_THRESHOLD = 10;

class World {
  constructor() {
    this.playground = {
      width: 400,
      height: 400,
    };
    this.score = 0;
    this.hero = undefined;
    this.enemies = [];
    this.element = {
      game: document.getElementById("game"),
<<<<<<< HEAD
      score: document.getElementById("score"),
      sound: document.getElementById("sound");
=======
      score: document.getElementById("score")
>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
    };

    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
          this.hero.moveRight();
          break;
        case "ArrowLeft":
          this.hero.moveLeft();
          break;
        case "ArrowUp":
          this.hero.moveUp();
          break;
        case "ArrowDown":
          this.hero.moveDown();
          break;
        default:
          console.log(event.key);
          break;
      }
      this.positionChanged();
    });
  }

  init() {
    // cleanup old game
    // generate hero
<<<<<<< HEAD

    this.generateHero();

    for (let i = 1 ; i <= MAX_ENEMIES; i++) {
        this.generateEnemy(i);
    }
=======
>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
    // generate enemies
  }

  generateHero() {
    // create hero element
<<<<<<< HEAD

    const element = document.createElement('img');
    element.setAttribute('id', 'hero');
    element.setAttribute('class', 'hero');
    // add id and class
    // due async nature of "src" propagation, prepare callback when img loaded
    element.addEventListener("load", () => {
      const hero = new Hero();
      hero.init(element);
      this.hero = hero;
      // create hero object
      // push to enemies stack
    });
    element.setAttribute('src', 'assets/wizzard.gif');

    // add img src
    
    // append to game
    this.element.game.appendChild(element);
=======
    // add id and class
    // due async nature of "src" propagation, prepare callback when img loaded
    element.addEventListener("load", () => {
      // create hero object
      // push to enemies stack
    });
    // add img src
    // append to game
>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
  }

  generateEnemy(idx) {
    // create enemy element, similar to hero but some random position
<<<<<<< HEAD
    const element = document.createElement('img');
    element.setAttribute('id', `demon${idx}`);
    element.setAttribute('class', 'demon');

    element.addEventListener("load", () => {
      let maxNum = this.playground.width - element.offsetWidth;
      element.style.left = `${thid.getRandomInt(maxNum)}px`;
      maxNum = this.playground.height
    })
    // add id and class
    // due async nature of "src" propagation, prepare callback when img loaded
    element.addEventListener("load", () => {
      const enemy = new Enemy();
     enemy.init(element);
      this.enemies.push(enemy);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
=======
>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
  }

  updateScore() {
    this.score++;
    this.element.score.innerHTML = `Score: ${this.score}`;
  }

  resetScore() {
    this.score = 0;
    this.element.score.innerHTML = `Score: ${this.score}`;
  }

  positionChanged() {
    this.enemies
      .filter((enemy) => enemy.alive)
      .forEach((enemy) => {
        if (this.collision(this.hero.position, enemy.position)) {
          // update score
<<<<<<< HEAD
          this.updateScore();
          enemy.kill();
=======
          // kill enemy
>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
        }
      });
  }

  collision(hero, enemy) {
    let collided = false;
    // think of some collision model
    if (false) {
      collided = true;
    }
    return collided;
  }
}

export { World };
