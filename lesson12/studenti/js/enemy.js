import { Sprite } from "./sprite.js";

// should extend Sprite
class Enemy extends Sprite {
  constructor(name) {
    // set some name, type, moveBy
    // should track alive state
    // optionaly it can do chaotic movement
  }

  kill() {
    // should do something on kill
  }
}

export { Enemy };
