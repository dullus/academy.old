class Hero {
    constructor(world) {
        this.position = [0,0]
        this.dimension = [16, 28]
        this.name = 'Wizzard'
        this.me = document.querySelector('#wizard');
        this.world = world;
        this.moveBy = 5;
    }

    init = () => {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                this.moveRight();
            }
            else if (event.key === 'ArrowLeft') {
                this.moveLeft();
            }
        })
    }

    moveRight = () => {
        if (this.position[0] < this.world.width - this.dimension[0] -this.moveBy ) {
            this.position[0] += this.moveBy;
            this.updatePostion();
        }
    }

    updatePostion = () => {
        this.me.style.left = `${this.position[0]}px`;
        this.me.style.top = `${this.position[1]}px`;
        this.world.positionChanged(this.position[0], this.position[1])
    }
}

export default Hero;