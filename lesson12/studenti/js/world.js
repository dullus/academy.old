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
      score: document.getElementById("score"),
      sound: document.getElementById("sound");
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

    this.generateHero();

    for (let i = 1 ; i <= MAX_ENEMIES; i++) {
        this.generateEnemy(i);
    }
    // generate enemies
  }

  generateHero() {
    // create hero element

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
  }

  generateEnemy(idx) {
    // create enemy element, similar to hero but some random position
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
          this.updateScore();
          enemy.kill();
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
