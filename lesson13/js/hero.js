import { Sprite } from './sprite.js'

class Hero extends Sprite {
  constructor() {
    super();
    this.alive = true;
    this.name = 'Wizzard';
    this.type = 'hero';
    this.moveBy = 3;
  }
}

export { Hero };
