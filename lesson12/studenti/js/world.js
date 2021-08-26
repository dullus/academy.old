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
      sound: document.getElementById("sound")
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
    // generate enemies
    this.generateHero();
    for (let i = 1; i <= MAX_ENEMIES; i++) {
      this.generateEnemy(i);
    }
  }

  generateHero() {
   // create hero element
   const element = document.createElement("img");
   element.setAttribute("id", "wizzard");
   element.setAttribute("class", "hero");
   // due async nature of "scr" propagation, prepare callback when img loaded
   element.addEventListener("load", () => {
     // create hero object
     const hero = new Hero();
     hero.init(element);
     // push to enemies stack
     this.hero = hero;
   });
   element.setAttribute("src", "assets/wizzard.gif");
   // append to game
   this.element.game.appendChild(element);
  }
  

  generateEnemy(idx) {
    const element = document.createElement("img");
    element.setAttribute("id", `demon${idx}`);
    element.setAttribute("class", "demon");
    element.addEventListener("load", () => {
      // randomize placement
      let maxNum = this.playground.width - element.offsetWidth;
      element.style.left = `${this.getRandomInt(maxNum)}px`;
      maxNum = this.playground.height - element.offsetHeight;
      element.style.top = `${this.getRandomInt(maxNum)}px`;
      // create enemy object
      const enemy = new Enemy(`Demon ${idx}`);
      enemy.init(element);
      // push to enemies stack
      this.enemies.push(enemy);
    });
    element.setAttribute("src", "assets/big-demon-idle.gif");
    // append to game
    this.element.game.appendChild(element);
    // create enemy element, similar to hero but some random position
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
          // kill enemy
          this.element.sound.play();
          enemy.kill();
        }
      });
  }

  collision(hero, enemy) {
    let collided = false;
    if (
      Math.abs(enemy.left - hero.left) < COLLISION_THRESHOLD &&
      Math.abs(enemy.top - hero.top) < COLLISION_THRESHOLD
    ) {
      collided = true;
    }
    return collided;
  }
}

export { World };
