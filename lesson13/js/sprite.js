class Sprite {
  constructor(playground = { width: 400, height: 400 }) {
    this.position = { left: undefined, top: undefined };
    this.dimension = { x: undefined, y: undefined };
    this.playground = playground;
    this.element = undefined;
    this.moveBy = 1;
  }

  init(element) {
    this.element = element;
    this.dimension.x = element.offsetWidth;
    this.dimension.y = element.offsetHeight;
    this.position.left = element.offsetLeft;
    this.position.top = element.offsetTop;
  }

  moveRight() {
    if (this.position.left < this.playground.width - this.dimension.x - this.moveBy) {
      this.position.left += this.moveBy;
      this.updatePostion();
    }
  }

  moveLeft() {
    if (this.position.left > 0) {
      this.position.left -= this.moveBy;
      this.updatePostion();
    }
  }

  moveUp() {
    if (this.position.top > 0) {
      this.position.top -= this.moveBy;
      this.updatePostion();
    }
  };

  moveDown() {
    if (this.position.top < this.playground.height - this.dimension.y - this.moveBy) {
      this.position.top += this.moveBy;
      this.updatePostion();
    }
  };

  updatePostion() {
    this.element.style.left = `${this.position.left}px`;
    this.element.style.top = `${this.position.top}px`;
  }
}

export { Sprite };