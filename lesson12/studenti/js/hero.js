// should extend Sprite
class Hero extends Sprite{
  constructor() {
    // set some name, type, moveBy
    super();
    this.name = "Wizzard";
    this.type = 'hero';
    this.moveBy = 5;
  }
}

export { Hero };
