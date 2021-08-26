import { Sprite } from './sprite.js';



class Hero extends Sprite {
  constructor() {
    super();
    this.name = 'Wizzard';
    this.type = 'hero';
    this.moveBy = 5;
  }
}

export { Hero };
