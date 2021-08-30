import { Sprite } from "./sprite.js";

// should extend Sprite
class Enemy extends Sprite {
  constructor(name) {
<<<<<<< HEAD
    super();
    this.name = name;
    this.type = 'demon';
    this.moveBy = 3;
    this.alive = true;
=======
>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
    // set some name, type, moveBy
    // should track alive state
    // optionaly it can do chaotic movement
  }

  kill() {
    // should do something on kill
<<<<<<< HEAD
    this.element.style.display = 'none';
=======
>>>>>>> 716c7c14d40b41fece1302e0cb91749efa5bf45a
  }
}

export { Enemy };
