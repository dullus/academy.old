import { Sprite } from "./sprite.js";

// should extend Sprite
class Enemy extends Sprite {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'demon';
    this.moveBy = 3;
    this.alive = true;
    // set some name, type, moveBy
    // should track alive state
    // optionaly it can do chaotic movement
  }

  kill() {
    // should do something on kill
    this.element.style.display = 'none';
  }
}

export { Enemy };
