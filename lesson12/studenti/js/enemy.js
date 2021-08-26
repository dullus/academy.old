import { Sprite } from "./sprite.js";

const MOVE_INTERVAL = 100;

// should extend Sprite
class Enemy extends Sprite {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'demon';
    this.moveBy = 3;
    this.alive = true;
    this.chaos = window.setInterval(() => this.randomStep(), MOVE_INTERVAL);
    // optionaly it can do chaotic movement
  }

  kill() {
    this.element.style.display = 'none';
    this.alive = false;
  }

  randomStep() {
    const fortune = Math.floor(Math.random() * 4);
    switch (fortune) {
      case 0:
        this.moveLeft();
        break;
      case 1:
        this.moveUp();
        break;
      case 2:
        this.moveDown();
        break;
      case 3:
        this.moveRight();
        break;
    }
  }

}

export { Enemy };
