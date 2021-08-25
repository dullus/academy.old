const hero = "Superman";

class Hero {
  constructor(world) {
    this.position = [0, 0];
    this.dimension = [16, 28];
    this.name = "Wizard";
    this.me = document.querySelector("#wizard");
    this.world = world;
    this.moveBy = 5;
  }

  init = () => {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
          this.moveRight();
          break;
        case "ArrowLeft":
          this.moveLeft();
          break;
        case "ArrowUp":
          this.moveUp();
          break;
        case "ArrowDown":
          this.moveDown();
          break;
      }
    });
  };
  moveRight = () => {
    if (this.position[0] < this.world.width - this.dimension[0] - this.moveBy) {
      this.position[0] += 5;
      this.updatePosition();
    }
  };
  moveLeft = () => {
    if (this.position[0] > 0) {
      this.position[0] -= 5;
      this.updatePosition();
    }
  };
  moveUp = () => {
    if (this.position[1] > 0 - 5) {
      this.position[1] -= 5;
      this.updatePosition();
    }
  };
  moveDown = () => {
    if (this.position[1] < this.world.width - this.dimension[1] - this.moveBy) {
      this.position[1] += 5;
      this.updatePosition();
    }
  };
  updatePosition = () => {
    console.log(this.me);
    this.me.style.left = `${this.position[0]}px`;
    this.me.style.top = `${this.position[1]}px`;
    this.world.positionChanged(this.position[0], this.position[1]);
  };
}
export default Hero;
