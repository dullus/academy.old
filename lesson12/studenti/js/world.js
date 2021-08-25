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
      score: document.getElementById("score")
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
  }

  generateHero() {
    // create hero element
    // add id and class
    // due async nature of "src" propagation, prepare callback when img loaded
    element.addEventListener("load", () => {
      // create hero object
      // push to enemies stack
    });
    // add img src
    // append to game
  }

  generateEnemy(idx) {
    // create enemy element, similar to hero but some random position
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
          // kill enemy
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
