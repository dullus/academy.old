import { Sprite } from "./sprite.js";

// should extend Sprite
class Hero extends Sprite {
  constructor() {
    // set some name, type, moveBy
    super();
    this.name = "Wizard";
    this.type = "hero";
    this.moveBy = 5;
  }
}

export { Hero };
