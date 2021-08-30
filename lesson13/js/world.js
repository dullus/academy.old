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
      sound: document.getElementById("sound"),
      finish: document.getElementById("endGame")
    };

    const keyPressed = {};
    const moveLoop = () => {
      if(keyPressed.ArrowDown){
        this.hero.moveDown();
      }
      if(keyPressed.ArrowLeft){
        this.hero.moveLeft();
      }
      if(keyPressed.ArrowUp){
        this.hero.moveUp();
      }
      if(keyPressed.ArrowRight){
        this.hero.moveRight();
      }
      this.positionChanged();
      window.requestAnimationFrame(moveLoop);
    }

    window.requestAnimationFrame(moveLoop);
    document.addEventListener("keydown", ({key}) => {
      if(['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'].includes(key))
      keyPressed[key] = true;
      console.log(keyPressed);
      
    });
    document.addEventListener("keyup", ({key}) => {
      if(['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'].includes(key))
      keyPressed[key] = false;
    });
  }

  init() {
    this.resetScore();
    this.enemies.forEach((enemy) => enemy.element.remove());
    this.enemies = [];
    this.generateHero();
    for (let i = 1; i <= MAX_ENEMIES; i++) {
      this.generateEnemy(i);
    }
  }

  generateHero() {
    const element = document.createElement("img");
    element.setAttribute("id", "wizzard");
    element.setAttribute("class", "hero");
    element.addEventListener("load", () => {
      const hero = new Hero();
      hero.init(element);
      this.hero = hero;
    });
    element.setAttribute("src", "assets/wizzard.gif");
    this.element.game.appendChild(element);
  }

  generateEnemy(idx) {
    const element = document.createElement("img");
    element.setAttribute("id", `demon${idx}`);
    element.setAttribute("class", "demon");
    element.addEventListener("load", () => {
      let maxNum = this.playground.width - element.offsetWidth;
      element.style.left = `${this.getRandomInt(maxNum)}px`;
      maxNum = this.playground.height - element.offsetHeight;
      element.style.top = `${this.getRandomInt(maxNum)}px`;
      const enemy = new Enemy(`Demon ${idx}`);
      enemy.init(element);
      this.enemies.push(enemy);
    });
    element.setAttribute("src", "assets/big-demon-idle.gif");
    this.element.game.appendChild(element);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  updateScore() {
    this.score++;
    this.element.score.innerHTML = `Score: ${this.score}`;
    if (this.score < 10) {
      document.getElementById("endGame").style.display = 'none';
    } else {
      document.getElementById("endGame").style.display = 'block';
    }
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
          this.updateScore();
          enemy.kill();
          this.element.sound.play();
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
