class Hero{
    constructor(world){
        this.position = [0, 0];
        this.dimensions = [16, 28];
        this.name = 'Dumbledore';
        this.me = document.querySelector('#wizzard');
        this.world = world;
        this.moveBy = 5;
    }
    init = () => {
        document.addEventListener('keydown', (event) => {
            if(event.key == 'ArrowRight'){
                this.moveRight();
            }
            if(event.key == 'ArrowDown'){
                this.moveDown();
            }
            if(event.key == 'ArrowLeft'){
                this.moveLeft();
            }
            if(event.key == 'ArrowUp'){
                this.moveUp();
            }
        })
    }

    moveRight = () => {
        if(this.position[0] < this.world.width - this.dimensions[0] - this.moveBy){
            this.position[0] += this.moveBy;
            this.updatePosition();
        }
    }

    moveLeft = () => {
        if(this.position[0] > 0){
            this.position[0] -= this.moveBy;
            this.updatePosition();
        }
    }

    moveDown = () => {
        if(this.position[1] < this.world.height - this.dimensions[1] - this.moveBy){
            this.position[1] += this.moveBy;
            this.updatePosition();
        }
    }

    moveUp = () => {
        if(this.position[1] > 0){
            this.position[1] -= this.moveBy;
            this.updatePosition();
        }
    }

    updatePosition = () => {
        this.me.style.left = `${this.position[0]}px`;
        this.me.style.top = `${this.position[1]}px`;
        this.world.positionChanged(this.position[0], this.position[1]);
    }
}

export default Hero;